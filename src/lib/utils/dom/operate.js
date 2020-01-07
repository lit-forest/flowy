import { curry, partial, compose } from '../fun'
import IO from '../fp/IO'
import Either from '../fp/Either'
import { EitherIO, liftIO, runEitherIO } from '../fp/EitherIO'

const query = (doc, num, selector) => {
    const res =
        num === 'one'
            ? doc.querySelector(selector)
            : doc.querySelectorAll(selector);
    return res || (res && res.length)
        ? Either.Right(res)
        : Either.Left(`Error: Could not find DOM Node with selector '${selector}'`);
}

export const findDOM = partial(query, document, 'one')
export const findDOMAll = partial(query, document, 'all')


export const read = selector => IO.of(() => findDOM(selector))
export const readAll = selector => IO.of(() => findDOMAll(selector))

export const append = domNode =>
    parentNode =>
        IO.of(() => {
            Array.isArray(domNode)
                ? domNode.forEach(child => parentNode.appendChild(child))
                : parentNode.appendChild(domNode);
        })

export const appendNode = (selector, children) =>
    runEitherIO(EitherIO(read(selector))
        .chain(compose(liftIO, append(children))))

export const removeChild = (child) =>
    IO.of(() => child.remove())

export const removeNode = selector =>
    runEitherIO(EitherIO(read(selector))
        .chain(compose(liftIO, removeChild)))


/**
 * 创建带有namespace的元素
 * @param {string} NS 命名空间
 * @param {string} tag 标签名称
 * @param {array} attrs 普通属性
 * @param {array} nsAttrs 带有命名空间的属性
 */
export const createElementNS = curry((NS, tag, attrs, nsAttrs) => {
    const fragment = document.createDocumentFragment();
    const element = document.createElementNS(NS, tag);

    if (Array.isArray(nsAttrs)) {
        attrs.forEach(([key, value]) => element.setAttribute(key, value));
    }

    if (Array.isArray(nsAttrs)) {
        nsAttrs.forEach(([key, value, ns]) => element.setAttributeNS(ns, key, value));
    }

    return fragment.appendChild(element);
})