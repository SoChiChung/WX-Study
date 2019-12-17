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
      天气预报  
      地图查找  
      个人中心（扫码登录）
   -
2. 开发语言
   - 为了检验 ts 学习成果，所以使用**typescript**
   - tsconfig.json 配置见<a href="https://www.tslang.cn/docs/handbook/tsconfig-json.html">这里</a>

## 功能要点

- 地图查找

  1. 接口  
     接口首先开通了小程序**腾讯位置服务**  
     然后使用了**小程序 Javascript SDK**
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

## 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 踩过的坑

1. ts 封装的防抖节流

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [微信开发指南](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [腾讯位置服务 微信小程序 JavaScript SDK](https://lbs.qq.com/qqmap_wx_jssdk/index.html)
