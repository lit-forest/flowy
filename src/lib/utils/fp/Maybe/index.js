import { curry } from '../index'

export const Just = x => ({
    map: f => Just(f(x)),
    chain: (f, g) => f(x),
    fold: (f, g) => f(x),
    getOrElse: () => x,
    isJust: true,
    isNothing: false,
    inspect: () => `Maybe.Just(${x})`,
});

export const Nothing = x => ({
    map: f => Nothing(x),
    chain: (f, g) => Nothing(x),
    fold: (f, g) => g(x),
    getOrElse: v => v,
    isJust: false,
    isNothing: true,
    inspect: () => `Maybe.Nothing`,
});

export const Maybe = x =>
    x != null ? Just(x) : Nothing();

export const maybe = curry(
    (x, f, m) => m.isNothing ? x : f(m.getOrElse())
)

export default {
    Just,
    Nothing,
    Maybe,
    maybe,
    of: Maybe
}

