import { initSVG, drowBezierCurve, deleteLine } from './svg/index'
import { Drag } from './drag/index'

export const initFlowy = (canvasSelector) => {
    initSVG(canvasSelector)
    new Drag(canvasSelector)
}

export default {
    initSVG, drowBezierCurve, deleteLine,
    Drag,
    initFlowy
}
