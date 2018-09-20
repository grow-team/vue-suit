let body = null
export function getBodySize () {
  if (!body) {
    body = document.body
  }
  return {
    height: body.clientHeight,
    width: body.clientWidth
  }
}

export function routeI18n (title) {
  let router = 'router.' + title
  return this.$te(router) ? this.$t(router) : title
}
