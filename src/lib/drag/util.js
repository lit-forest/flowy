export const setStyle = (node, left, top) => {
    const oldLeft = node.style.left.replace('px', '')
    const oldTop = node.style.top.replace('px', '')
    node.style.left = oldLeft - left + 'px'
    node.style.top = oldTop - top + 'px'
}

export const wrapNode = (node, left, top) => {
    const copyNode = node.cloneNode(true)
    const wrapper = document.createElement('div')
    const topPoint = document.createElement('span')
    const bottomPoint = document.createElement('span')

    wrapper.classList.add('flow-block')
    topPoint.classList.add('flow-block-point', 'top')
    bottomPoint.classList.add('flow-block-point', 'bottom')
    wrapper.appendChild(topPoint)
    wrapper.appendChild(copyNode)
    wrapper.appendChild(bottomPoint)

    return { wrapper, topPoint, bottomPoint }
}

export const uuid = (namespace) =>
    namespace + new Date().getTime()