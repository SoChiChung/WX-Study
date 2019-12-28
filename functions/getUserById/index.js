// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let openid=context.OPENID;
    let data = await db.collection('users')
        .where({
            openid
        }).get({
            success: res => {
                console.log('查询返回', res)
                data = res.data
            },
            fail: console.error
        })
    return {
        data
    }
}