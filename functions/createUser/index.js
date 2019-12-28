// 云函数入口文件
const cloud = require('wx-server-sdk')
const db=cloud.database()
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let res=false;
    db.collection('users').add({
        data: {
            openid: wxContext.OPENID,
            books:[]
        },
        success:r=>{res=true},
        failed:err=>console.err(err)
    })
    
    return {
        /* event,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID, */
        res
    }
}