import { initSVG, drowBezierCurve, deleteLine } from './svg'
import { Flow } from './drag'

export const initFlowy = (canvasSelector) => {
    initSVG(canvasSelector)
    const flow = new Flow(canvasSelector)

    return {
        output: () => flow.tempBlockList,
        import: output => flow.import(output)
    }
}

export default {
    initSVG, drowBezierCurve, deleteLine,
    Flow,
    initFlowy
}
