// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async(event, context) => {
    const wxContext = cloud.getWXContext()
    let bookname = event.bookname || ''
    let data = await db.collection('books')
        .where({}).get({
            success: res => {
                console.log('查询返回', res)
                data = res.data
            },
            fail: console.error
        })
    return {
        /* event,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID, */
        data
    }
}