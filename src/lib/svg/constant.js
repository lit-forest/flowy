export const SVG_NS = "http://www.w3.org/2000/svg"

export const SVG_ID = 'flow-svg'

export const SVG_ATTR = [
    ['id', 'flow-svg'],
    ['style', 'position:absolute;top:0;left:0']
]

export const SVG_NS_ATTR = [
    ['xmlns:xlink', 'http://www.w3.org/1999/xlink', 'http://www.w3.org/2000/xmlns/']
]

export const MARKER_ATTR = [
    ['viewBox', '0 0 10 10'],
    ['refX', '5'],
    ['refY', '5'],
    ['markerUnits', 'strokeWidth'],
    ['markerWidth', '10'],
    ['markerHeight', '8'],
    ['orient', 'auto'],
    ['fill', '#333'],
]

export const TRIANGEL_ATTR = [
    ['d', 'M 0 0 L 10 5 L 0 10 z']
]

export const CRICLE_ATTR = [
    ['cx', 5, null],
    ['cy', 5, null],
    ['r', 5, null],
    ['fill', '#333', null],
]

export const BEZIER_ATTR = [
    ['fill', 'none'],
    ['marker-start', 'url(#circle)'],
    ['marker-end', 'url(#triangle)'],
]