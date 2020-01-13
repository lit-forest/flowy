import { curry } from './base'

export const eq = curry((x, y) => x === y)

export const gt = curry((x, y) => x > y)

export const gte = curry((x, y) => x >= y)

export const lt = curry((x, y) => x < y)

export const lte = curry((x, y) => x <= y)

export const diff = curry((x, y) => x !== y)

export const or = curry((x, y) => x || y)

export const and = curry((x, y) => x && y)

export const not = statement => !statement