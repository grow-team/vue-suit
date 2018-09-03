export const cssSupport = (attr, value) => {
  const element = document.createElement('div')
  if (attr in element.style) {
    element.style[attr] = value
    return element.style[attr] === value
  }
  return false
}

/**
 * sticky浏览器支持的比较差
 * 在chrome浏览器上使用也出现了bug
 */
export const stickySupport = () => cssSupport('position', 'sticky')
