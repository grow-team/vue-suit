
// import { stickySupport } from './utils'
// 浏览器是否支持sticky
// const canSticky = stickySupport()
// scrollEl:true 用来标记产生滚动的元素。todo 默认使用window
// todo 兼容处理 多种样式的情况, 比如padding不为0 等等
const defaultBinding = {
  stickyTop: 0,
  zIndexf: 200,
  backgroundColor: ''
}

const gEls = []
let gScroll = null
let scrollEl = null

const getBinding = (binding) => {
  const params = binding.value || {}
  const stickyTop = params.top || 0
  const { backgroundColor, scrollEl, zIndex } = params
  return Object.assign({}, defaultBinding, { stickyTop, zIndex, backgroundColor, scrollEl })
}

const graceStick = ({ el, bind }) => {
  const { style } = el
  // if (canSticky) {
  // 	style.position = 'sticky';
  // } else {
  // 	style.position = 'fixed';
  // }
  style.width = `${el.style.width || el.offsetWidth}px`
  style.position = 'fixed'
  style.zIndex = bind.zIndex
  style.top = `${bind.stickyTop}px`
  style.backgroundColor = bind.backgroundColor
}
const unStick = ({ el }) => {
  const { style } = el
  style.position = ''
  style.zIndex = ''
  style.top = ''
  style.width = ''
  style.backgroundColor = ''
}

const handlerScroll = () => {
  const elArr = gEls
  elArr.forEach((item) => {
    // const { top } = item.el.getBoundingClientRect()
    if (item.bind.stickyTop <= +scrollEl.scrollTop) {
      graceStick(item)
    } else {
      unStick(item)
    }
  })
}
const listenScroll = () => {
  // const len = gEls.length
  // if (len === 0) {
  //   return
  // }
  // todo 增加截流控制
  scrollEl.addEventListener('scroll', handlerScroll)
}

export default {
  bind (el, binding) {
    const bind = getBinding(binding)
    if (!scrollEl && bind.scrollEl) {
      scrollEl = el
      if (!gScroll) {
        gScroll = listenScroll()
        gScroll = 1
      }
    } else {
      gEls.push({ el, bind })
    }
  },
  unbind (el) {
    const len = gEls.length
    for (let i = 0; i < len; i += 1) {
      // todo 判断是同一个元素, 需要改进, 最好根据具体属性来区分
      if (gEls[i] === el) {
        gEls.splice(i, 1)
      }
    }
    if (gEls.length === 0) {
      scrollEl && scrollEl.removeEventListener('scroll', handlerScroll)
      gScroll = null
    }
  }
}
