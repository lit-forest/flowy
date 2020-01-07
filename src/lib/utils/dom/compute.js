import { curry } from '../fun'

/**
 * offset to 浏览器左上角
 * @param {*} node 
 */
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

/**
 * 判断元素位置是否处于完全重叠
 */
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
    const { top, left, right, width, height } = element.getBoundingClientRect();
    return {
        x: left + (width || right - left) / 2,
        y: top + height
    };
}

/**
 * 元素上边框中心
 * @param {*} element 
 */
export function getPositionAtTopCenter(element) {
    const { top, left, width, right } = element.getBoundingClientRect();
    return {
        x: left + (width || right - left) / 2,
        y: top
    };
}

/**
 * 元素中心点
 * @param {*} element 
 */
export function getPositionAtCenter(element) {
    const { top, left, right, bottom, width, height } = element.getBoundingClientRect();
    return {
        x: left + (width || right - left) / 2,
        y: top + (height || bottom - top) / 2
    };
}

/**
 * 计算两个元素中心点之间距离
 * @param {*} a 
 * @param {*} b 
 */
export function getDistanceBetweenPointes(a, b) {
    const { x: x1, y: y1 } = getPositionAtCenter(a);
    const { x: x2, y: y2 } = getPositionAtCenter(b);

    return getDistanceByXY(x1, y1, x2, y2)
}

/**
 * 计算两点之间的距离
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 */
export function getDistanceByXY(x1, y1, x2, y2) {
    return Math.hypot(x1 - x2, y1 - y2);
}

/**
 * 获取元素的宽高
 * @param {*} element 
 */
export function getEleSize(element) {
    const { top, bottom, left, right, height, width } = element.getBoundingClientRect()
    return {
        height: height || bottom - top,
        width: width || right - left
    }
}