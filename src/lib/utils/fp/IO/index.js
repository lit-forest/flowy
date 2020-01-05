import { curry, emptyFun } from '../../fun'

export const IO = g => ({
    map: f => IO(() => f(g())),
    chain: f => IO(() => f(g()).run()),
    fold: f => f(g()),
    run: () => g()
})

export const ioWhen = curry((pred, ioFn, val) =>
    pred(val) ? ioFn(val) : IO(emptyFun))

export default {
    IO,
    ioWhen,
    of: IO
}