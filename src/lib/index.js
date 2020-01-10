import { Flow } from './drag'
import { removeNode } from './utils/dom'

export const startCanvas = (canvasSelector) => {
    const flow = new Flow(canvasSelector)

    return {
        output: () => ({
            blockList: JSON.stringify(flow.tempBlockList),
            lineList: JSON.stringify(flow.lineList),
            html: flow.canvas.innerHTML
        }),
        import: output => flow.import(output),
        clear: () => {
            flow.tempBlockList.map(({ id }) => removeNode(`#${id}`))
            flow.lineList.map(({ id }) => removeNode(`#${id}`))
            flow.tempBlockList = []
            flow.lineList = []
        }
    }
}

export default {
    startCanvas
}
