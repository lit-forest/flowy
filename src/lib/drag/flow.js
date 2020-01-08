import { modelFunctions } from '../utils/model'

const defaultState = {
    blocks: [],
    lines: [],
}

const Flow = state => ({
    ...modelFunctions(Flow)({
        ...defaultState,
        state
    })
})

export default Flow