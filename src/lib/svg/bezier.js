import { SVG_NS, SVG_ID, BEZIER_ATTR } from './constant'
import { createElementNS, appendNode, removeNode } from '../utils/dom'

/**
 * 绘制贝塞尔曲线
 * @param {*} id 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @param {*} color 
 * @param {*} tension 
 */
export const drowBezierCurve = (id, x1, y1, x2, y2, color = '#333', tension = 0.5) => {
    deleteLine(id)
    appendNode(`#${SVG_ID}`, bezierShape(id, x1, y1, x2, y2, color, tension))
}

/**
 * 创建贝塞尔曲线
 * @param {*} id 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @param {*} color 
 * @param {*} tension 
 */
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

/**
 * 创建三阶贝塞尔曲线
 * @param {c} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @param {*} tension 
 */
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

/**
 * 删除svg的连接线
 * @param {*} id 
 */
export const deleteLine = id => removeNode(`#${id}`)
