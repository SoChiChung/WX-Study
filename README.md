# 小程序开发期末作业

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKuangPF%2FwxAPP_toutiaoNews.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FKuangPF%2FwxAPP_toutiaoNews?ref=badge_shield)

## 要求

- 主题内容不限，各小组自行选择；
- 功能完整，没有不可用组件；
- 至少包含 10 个不同内容的页面（page）；
- 至少包含页面导航组件和地图组件，其他组件不限
- 至少使用位置 API、扫码 API、登录 API、转发 API，其他 API 不限。
- 同时实现前端和后端，后端必须包含数据库，允许使用小程序云平台代替后端。

## 基本构建

1. 功能目录
   - **tabbar**：  
      首页  
      扫码分享书籍
      地图查找  
      个人中心
   - 
2. 开发语言
   - 为了检验 ts 学习成果，所以使用**typescript**
   - tsconfig.json 配置见<a href="https://www.tslang.cn/docs/handbook/tsconfig-json.html">这里</a>
3. 目录结构
   1. 

## 功能要点

- 首页

  1. 功能
     1. 新闻展示
     2. 点击进入新闻详情
     3. 上方滑动导航栏切换
  2. 实现
     1. 搜索框使用了原生的 weui 的 searchbar 然后提示的功能在 index.js 的 search 方法定义 由于没有搜索接口 这里就不写具体功能了 制作一个简单的演示
     2. 新闻数据来源: 新闻数据来源于[聚合数据](https://www.juhe.cn/)
- 地图查找

  1. 接口  
     接口首先开通了小程序**腾讯位置服务**  
     然后使用了**小程序 Javascript SDK**
     后来发现好像可以使用**腾讯地图选点插件**
  2. 展示
     搜索使用了封装的防抖节流
  3. 配置  
     **app.json**设置了
     ```json
     "permission": {
        "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示"
        }
     },
     ```
 - 扫码  
   1. 功能
      1. 通过小程序生成对应书籍二维码
      2. 其他用户可以通过小程序打开的扫码 扫书籍二维码把书籍添加到自己的书单里
   2. 实现
      1. 使用QRcode生成二维码
      2. 使用云函数实现读取数据库的数据
- 个人中心
  1. 功能
     1. 个人中心实现了个人介绍修改 头像修改 日期修改
     2. 如果第一次登陆 会使用微信头像和昵称
  2. 实现
     1. 加载时先检查 storage 如果 storage 为空就根据**wx.getUserInfo**获取用户头像 昵称
     2. 生日地区修改使用了 picker 通过 picker 改变 userinfo picker 里面 end 的取值的当前的日期（new Date（） 通过引入 util 里面的 util.js 实现格式化）
     3. 写了个弹窗组件 里面的内容通过 slot 获取 然后使用了父子组件传值
## 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 踩过的坑

1. ts 封装的防抖节流
2. ts调用云函数的时候 容易发生类型不对 此时可以检查**wx/xxx.d.ts**内的接口查看定义
3. ts调用云函数时 容易发生编辑器内已修改 但是source里面代码没发生变化的情况 重启开发工具即可

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [微信开发指南](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [腾讯位置服务 微信小程序 JavaScript SDK](https://lbs.qq.com/qqmap_wx_jssdk/index.html)
- [腾讯地图选点插件](https://lbs.qq.com/miniprogram_plugin/location-picker.html)
- [QRCODE](https://github.com/demi520/wxapp-qrcode)
