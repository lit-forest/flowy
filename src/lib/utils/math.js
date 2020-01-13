import { curry } from './base'

export const sub = curry((x, y) => x - y)

export const add = curry((x, y) => x + y)

export const mult = curry((x, y) => x * y)

export const div = curry((x, y) => x / y)

export const mod = curry((x, y) => x % y)

export const pow = curry((x, y) => x ** y)