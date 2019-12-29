 const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}
 const formatDateTime = (date:Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()


    return [year, month, day].map(formatNumber).join('-')
}
const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}
/**
 * 匹配 body 中的元素，删除 script 标签
 */

var REG_BODY = /<body[^>]*>([\s\S]*)<\/body>/
const getBodyHtml = (html:any) => {
  let result = REG_BODY.exec(html)||[]
  if (result && result.length === 2) return result[1].replace(/<script.*?>.*?<\/script>/gi, '')

  let content=html.content||{}
  return content.replace(/<script.*?>.*?<\/script>/gi, '')
}
module.exports = {
    getBodyHtml,
    formatTime,
    formatDateTime
}