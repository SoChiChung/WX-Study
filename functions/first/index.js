// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// 云函数的传入参数有两个，一个是 event 对象，一个是 context 对象。event 指的是触发云函数的事件，当小程序端调用云函数时，event 就是小程序端调用云函数时传入的参数，外加后端自动注入的小程序用户的 openid 和小程序的 appid。context 对象包含了此处调用的调用信息和运行状态，可以用它来了解服务运行的情况。

exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()

    return {
        // event,
        // openid: wxContext.OPENID,
        // appid: wxContext.APPID,
        // unionid: wxContext.UNIONID,
        sum:event.a+event.b
    }
}