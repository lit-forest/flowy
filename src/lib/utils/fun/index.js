export const __ = '__';

export const curry = fn => {
    const curryN = (n, fn) =>
        (...args) =>
            args.length >= n
                ? fn(...args)
                : curryN(n - args.length,
                    (...innerArgs) =>
                        fn(...args, ...innerArgs));

    return curryN(fn.length, fn);
};

export const partial =
    (fn, ...presetArgs) =>
        (...laterArgs) =>
            fn(...presetArgs, ...laterArgs);

export const compose =
    (...fns) =>
        x =>
            fns.reduceRight((v, f) => f(v), x)


export const id = x => x;

export const emptyFun = () => undefined

export const notEmpty = (x) => x != null

export const def = x => typeof x !== 'undefined'


const reduceFn = (f, init, arr) => {
    const len = arr.length
    if (!len) return init
    let memo = init
    for (let i = 0; i < len; i += 1) {
        const x = arr[i]
        if (!def(x)) return memo
        memo = f(memo, x, i)
    }
    return memo
}

export const reduce = curry(reduceFn, 3)

export const hashedFns = curry((fns, hash) => {
    const fn = fns[hash]
    if (!fn) {
        throw 'Invalid case'
    }
    return fn()
})

export const or = curry((x, y) => x || y)

export const flip = fn => (...x) => (...y) => fn(...y)(...x)


export default {
    __,
    curry,
    partial,
    compose,
    emptyFun,
    id,
    reduce
}