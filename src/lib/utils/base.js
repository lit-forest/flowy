export const curry = fn => {
    const curryN = (n, fn) => (...args) => args.length >=
        n ? fn(...args) : curryN(n - args.length,
            (...innerArgs) =>
                fn(...args, ...innerArgs));
    return curryN(fn.length, fn);
};

export const partial = (fn, ...presetArgs) => (...laterArgs) => fn(...presetArgs, ...laterArgs);

export const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

export const tracker = x => {
    console.log(x);
    return x
}

export const id = x => x;

export const emptyFun = () => { }

export const notEmpty = (x) => x != null

export const always = x => () => x

export const def = x => typeof x !== 'undefined'