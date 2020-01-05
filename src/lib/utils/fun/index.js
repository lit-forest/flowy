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

export default {
    __,
    curry,
    partial,
    compose,
    emptyFun,
    id
}