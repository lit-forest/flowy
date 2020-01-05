import { initSVG, drowBezierCurve, deleteLine } from './svg'
import { Drag } from './drag'

export const initFlowy = (canvasSelector) => {
    initSVG(canvasSelector)
    new Drag(canvasSelector)
}

export default {
    initSVG, drowBezierCurve, deleteLine,
    Drag,
    initFlowy
}
