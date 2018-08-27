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
