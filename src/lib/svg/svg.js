import {
    SVG_NS,
    SVG_ID,
    SVG_ATTR,
    SVG_NS_ATTR,
    MARKER_ATTR,
    TRIANGEL_ATTR,
    CRICLE_ATTR
} from './constant'
import { createElementNS, elementSize } from '../utils/dom'
import { curry, partial, compose, emptyFun } from '../utils/fun'
import { read } from '../utils/dom'
import { either } from '../utils/fp/Either'
import IO from '../utils/fp/IO'
import { EitherIO, liftIO, runEitherIO } from '../utils/fp/EitherIO'

export const initSVG = (selector) =>
    either(emptyFun, emptyFun)(appendSVG(selector, createSVG()))

export const append = domNode =>
    parentNode =>
        IO.of(() => {
            setSVGSize(domNode, elementSize(parentNode))
            parentNode.appendChild(domNode);
        })

export const appendSVG = (selector, children) =>
    runEitherIO(EitherIO(read(selector))
        .chain(compose(liftIO, append(children))))

export const setSVGSize = (svg, { width, height }) => {
    svg.setAttributeNS(null, "viewBox", "0 0 " + width + " " + height);
    svg.setAttributeNS(null, "width", width);
    svg.setAttributeNS(null, "height", height);
}

export const createSVG = () => {
    const svg = createElementNS(SVG_NS, "svg", SVG_ATTR, SVG_NS_ATTR)
    const arrowMarker = createMarker('triangle', 'path', TRIANGEL_ATTR)
    const circleMarker = createMarker('circle', 'circle', CRICLE_ATTR)
    svg.append(arrowMarker)
    svg.append(circleMarker)
    return svg
}

export const createMarker = (id, type, attr = [], nsAttr = []) => {
    const defs = createElementNS(SVG_NS, 'defs', [], []);

    const marker = createElementNS(SVG_NS, 'marker', [['id', id], ...MARKER_ATTR], [])

    const path = createElementNS('http://www.w3.org/2000/svg', type, attr, nsAttr)

    marker.append(path);
    defs.append(marker);

    return defs
}
