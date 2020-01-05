import { curry, partial, compose, emptyFun } from '../fun'
import IO from '../fp/IO'
import Either, { either } from '../fp/Either'
import { EitherIO, liftIO, runEitherIO } from '../fp/EitherIO'

const query = (doc, num, selector) => {
    const res =
        num === 'one'
            ? doc.querySelector(selector)
            : doc.querySelectorAll(selector);
    return res || (res && res.length)
        ? Either.Right(res)
        : Either.Left(`Error: Could not find DOM Node with selector '${selector}'`);
}

export const findDOM = partial(query, document, 'one')
export const findDOMAll = partial(query, document, 'all')


export const read = selector => IO.of(() => findDOM(selector))
export const readAll = selector => IO.of(() => findDOMAll(selector))

export const append = domNode =>
    parentNode =>
        IO.of(() => {
            Array.isArray(domNode)
                ? domNode.forEach(child => parentNode.appendChild(child))
                : parentNode.appendChild(domNode);
        })

export const appendNode = (selector, children) =>
    runEitherIO(EitherIO(read(selector))
        .chain(compose(liftIO, append(children))))


export const createElementNS = curry((NS, tag, attrs, nsAttrs) => {
    const fragment = document.createDocumentFragment();
    const element = document.createElementNS(NS, tag);

    if (Array.isArray(nsAttrs)) {
        attrs.forEach(([key, value]) => element.setAttribute(key, value));
    }

    if (Array.isArray(nsAttrs)) {
        nsAttrs.forEach(([key, value, ns]) => element.setAttributeNS(ns, key, value));
    }

    return fragment.appendChild(element);
})

export const removeChild = (child) =>
    IO.of(() => {
        child.parentNode.removeChild(child)
    })

export const removeNode = selector =>
    runEitherIO(EitherIO(read(selector))
        .chain(compose(liftIO, removeChild)))

export const elementSize = element => ({
    width: element.scrollWidth,
    height: element.scrollHeight
})

export const getOffset = node => {
    const box = node.getBoundingClientRect();
    const docElem = document.documentElement;
    const left = box.left + (window.pageXOffset || docElem.scrollLeft) -
        (docElem.clientLeft || document.body.clientLeft || 0)
    const top = box.top + (window.pageYOffset || docElem.scrollTop) -
        (docElem.clientTop || document.body.clientTop || 0)
    return {
        left: left,
        top: top,
        right: left + box.width,
        bottom: top + box.height
    };
}

export const positionVerlapping = curry((parentNode, targetNode) => {
    const { left: l1, top: t1, right: r1, bottom: b1 } = getOffset(parentNode)
    const { left: l2, top: t2, right: r2, bottom: b2 } = getOffset(targetNode)

    return l1 <= l2 && r1 >= r2 && t1 <= t2 && b1 >= b2
})

/**
 * 元素下边框中心
 * @param {*} element 
 */
export function getPositionAtBottomCenter(element) {
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
        x: left + width / 2,
        y: top + height
    };
}

/**
 * 元素上边框中心
 * @param {*} element 
 */
export function getPositionAtTopCenter(element) {
    const { top, left, width } = element.getBoundingClientRect();
    return {
        x: left + width / 2,
        y: top
    };
}

/**
 * 元素中心点
 * @param {*} element 
 */
export function getPositionAtCenter(element) {
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
        x: left + width / 2,
        y: top + height / 2
    };
}

export function getDistanceBetweenPointes(a, b) {
    const aPosition = getPositionAtCenter(a);
    const bPosition = getPositionAtCenter(b);

    return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
}

export function getDistanceByXY(x1, y1, x2, y2) {
    return Math.hypot(x1 - x2, y1 - y2);
}

export function getEleSize(element) {
    const { height, width } = getComputedStyle(element)
    return {
        height: height.replace('px', '') * 1,
        width: width.replace('px', '') * 1,
    }
}