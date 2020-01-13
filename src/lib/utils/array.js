import { curry } from './base'

export const map = curry((fn, xs) => xs.map(fn))

export const filter = curry((fn, xs) => xs.filter(fn))

export const includes = curry((x, xs) => xs.includes(x))

export const length = array => array.length

export const getItem = curry((array, i) => array[i])