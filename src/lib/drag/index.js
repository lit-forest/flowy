import { fromEvent } from 'rxjs';
import { map, filter, tap, takeUntil, mergeMap } from 'rxjs/operators';

import { positionVerlapping, getOffset, getPositionAtCenter, getDistanceByXY } from '../utils/dom'
import { setStyle, wrapNode, uuid } from './util'
import { drowBezierCurve, deleteLine } from '../svg'

export class Flow {
    constructor(selector) {
        this.canvas = document.querySelector(selector);
        this.tempBlockList = [];
        this.currPathUUID = null;
        this.parentId = null;

        this.blockMouseDown = this.blockMouseDown.bind(this)
        this.handleTempBlcokDrag = this.handleTempBlcokDrag.bind(this)
        this.handlePointDrag = this.handlePointDrag.bind(this)

        this.draggableBlocks = [...document.querySelectorAll('.flow-block')]
        this.draggableBlocks.forEach(this.blockMouseDown)
    }

    blockMouseDown(block) {
        let tempBlock
        const blockMouseDown$ = fromEvent(block, 'mousedown')
            .pipe(
                map(ev => ({
                    startX: ev.offsetX,
                    startY: ev.offsetY,
                    original: ev.target
                })),
                tap(({ startX, startY, original }) => {
                    const sourceBlock = original.closest('.flow-block');
                    const { wrapper } = wrapNode(sourceBlock)
                    tempBlock = wrapper;
                    const dragx = startX - (sourceBlock.offsetLeft);
                    const dragy = startY - (sourceBlock.offsetTop);
                    wrapper.classList.add('temp-block')
                    wrapper.style.left = startX - dragx + "px";
                    wrapper.style.top = startY - dragy + "px";
                    wrapper.id = uuid('B');
                    document.body.appendChild(wrapper);
                }))

        const mousemove$ = fromEvent(document, 'mousemove')
        const mouseup$ = fromEvent(document, 'mouseup')
            .pipe(tap(() => {
                if (positionVerlapping(this.canvas, tempBlock)) {
                    const { left, top } = getOffset(this.canvas)
                    setStyle(tempBlock, left, top)
                    tempBlock.parentNode.removeChild(tempBlock)
                    this.canvas.appendChild(tempBlock)
                    const temp = {
                        id: tempBlock.id,
                        element: tempBlock,
                        childrenLine: [],
                        parentsLine: [],
                        children: [],
                        parents: []
                    }

                    this.tempBlockList.push(temp)
                    this.handleTempBlcokDrag(temp)
                    this.handlePointDrag(temp)
                } else {
                    tempBlock.parentNode.removeChild(tempBlock)
                }
            }))

        const mousedrag$ = blockMouseDown$.pipe(
            mergeMap(({ startX, startY }) =>
                mousemove$.pipe(
                    map(({ clientX, clientY }) => ({
                        left: clientX - startX,
                        top: clientY - startY,
                    })),
                    takeUntil(mouseup$),
                )));

        mousedrag$.subscribe(state => {
            tempBlock.style.top = state.top + 'px'
            tempBlock.style.left = state.left + 'px'
        })
    }

    handleTempBlcokDrag(block) {
        const { element, parentsLine, childrenLine } = block;

        const mousedown$ = fromEvent(element, 'mousedown')
        const mouseup$ = fromEvent(document, 'mouseup')
        const mousemove$ = fromEvent(document, 'mousemove');

        const mousedrag$ = mousedown$.pipe(
            filter(e => !e.target.classList.contains('flow-block-point')),
            mergeMap(({ offsetX, offsetY }) =>
                mousemove$.pipe(
                    map(({ clientX, clientY }) => ({
                        left: clientX - offsetX,
                        top: clientY - offsetY,
                    })),
                    tap(({ left, top }) => {
                        const { left: canvasLeft, top: canvasTop } = getOffset(this.canvas)
                        parentsLine.forEach(parent => {
                            const parentWidth = element.offsetWidth
                            parent.to = [left + parentWidth / 2 - canvasLeft, top - canvasTop]
                            drowBezierCurve(parent.id, parent.from[0], parent.from[1], left + parentWidth / 2 - canvasLeft, top - canvasTop)
                        })

                        childrenLine.forEach(child => {
                            const childWidth = element.offsetWidth
                            const childHeight = element.offsetHeight
                            child.from = [left + childWidth / 2 - canvasLeft, top + childHeight - canvasTop];
                            drowBezierCurve(child.id, left + childWidth / 2 - canvasLeft, top + childHeight - canvasTop, child.to[0], child.to[1])
                        })
                    }),
                    takeUntil(mouseup$),
                ),
            ),
        );

        mousedrag$.subscribe(({ top, left }) => {
            const { left: canvasLeft, top: canvasTop } = getOffset(this.canvas)

            element.style.left = left - canvasLeft + 'px';
            element.style.top = top - canvasTop + 'px';
        });
    }

    handlePointDrag(block) {
        const { element } = block
        const point = element.querySelector('.bottom')
        let mousedown$ = fromEvent(point, 'mousedown')
        let mouseup$ = fromEvent(document, 'mouseup')
            .pipe(
                tap(ev => {
                    const { x, y } = getPositionAtCenter(point)
                    const { left: canvasLeft, top: canvasTop } = getOffset(this.canvas)

                    let keepLine = false
                    for (let i = 0; i < this.tempBlockList.length; i++) {
                        const block = this.tempBlockList[i].element;
                        const pointerTop = block.querySelector('.top');
                        const pointerTopXY = getPositionAtCenter(pointerTop)
                        const distance =
                            getDistanceByXY(ev.clientX, ev.clientY, pointerTopXY.x, pointerTopXY.y)
                        if (distance < 50) {
                            drowBezierCurve(this.currPathUUID,
                                x - canvasLeft,
                                y - canvasTop,
                                pointerTopXY.x - canvasLeft,
                                pointerTopXY.y - canvasTop,
                            )
                            keepLine = true
                            const lineInfo = {
                                from: [x - canvasLeft, y - canvasTop],
                                to: [pointerTopXY.x - canvasLeft, pointerTopXY.y - canvasTop],
                                id: this.currPathUUID
                            }
                            this.tempBlockList[i].parentsLine.push(lineInfo)
                            this.tempBlockList[i].parents.push(this.parentId)

                            this.tempBlockList.forEach(block => {
                                if (block.element === element) {
                                    block.childrenLine.push(lineInfo)
                                    block.children.push(this.tempBlockList[i].element.id)
                                }
                            })
                            break
                        }
                    }

                    if (!keepLine) {
                        deleteLine(this.currPathUUID)
                    }
                })
            );
        let mousemove$ = fromEvent(document, 'mousemove');

        let mousedrag$ = mousedown$.pipe(
            tap(() => {
                this.currPathUUID = uuid('L');
                this.parentId = element.id
            }),
            map(({ offsetX, offsetY }) => ({ offsetX, offsetY, id: this.currPathUUID })),
            mergeMap(({ offsetX, offsetY, id }) =>
                mousemove$.pipe(
                    map(({ clientX, clientY }) => ({
                        left: clientX - offsetX,
                        top: clientY - offsetY,
                        id
                    })),
                    takeUntil(mouseup$),
                )));

        mousedrag$.subscribe(({ top, left, id }) => {
            const { left: canvasLeft, top: canvasTop } = getOffset(this.canvas)
            const { x, y } = getPositionAtCenter(point)
            drowBezierCurve(id, x - canvasLeft, y - canvasTop, left - canvasLeft, top - canvasTop)
        });
    }

    import(blockList) {

    }
}

