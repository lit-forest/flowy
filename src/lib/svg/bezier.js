import { SVG_NS, SVG_ID, BEZIER_ATTR } from './constant'
import { either } from '../utils/fp/Either'
import { createElementNS, appendNode, removeNode } from '../utils/dom'
import { emptyFun } from '../utils/fun';

export const drowBezierCurve = (id, x1, y1, x2, y2, color = '#333', tension = 0.5) => {
    deleteLine(id)
    appendNode(`#${SVG_ID}`, bezierShape(id, x1, y1, x2, y2, color, tension))
}
export const bezierShape = (id, x1, y1, x2, y2, color, tension) => {
    const createShape = createElementNS(SVG_NS, "path")
    const path = bezierPath(x1, y1, x2, y2, tension)
    const shape = createShape([], [
        ['id', id],
        ['d', path],
        ['stroke', color],
        ...BEZIER_ATTR
    ])
    return shape
}

export const bezierPath = (x1, y1, x2, y2, tension) => {
    const delta = (y2 - y1) * tension;
    const hx1 = x1;
    const hy1 = y1 + delta;
    const hx2 = x2;
    const hy2 = y2 - delta;
    return "M " + x1 + " " + y1 +
        " C " + hx1 + " " + hy1 + " "
        + hx2 + " " + hy2 + " "
        + x2 + " " + y2;
}

export const deleteLine = (id) =>
    either(() => console.error(`没有找到对应id为: '${id}' 的line`), emptyFun)(removeNode(`#${id}`))
