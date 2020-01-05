import { curry, id, emptyFun } from '../../fun'

export const Right = x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    flod: (f, g) => g(x),
    concat: o => o.flod(e => Left(e), y => Right(x.concat(y))),
    isLeft: false,
    isRight: true,
})

export const Left = x => ({
    chain: f => Left(x),
    map: f => Left(x),
    flod: (f, g) => f(x),
    concat: o => Left(x),
    isLeft: true,
    isRight: false,
})

export const fromNullable = x =>
    x != null ? Right(x) : Left(x)

export const tryCatch = f => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

export const either = curry(
    (f, g, e) => e.flod(f, g)
)

export default {
    Right,
    Left,
    fromNullable,
    tryCatch,
    either,
    of: Right
}