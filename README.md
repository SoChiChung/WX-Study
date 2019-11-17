## 微信小程序--洋葱新闻

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKuangPF%2FwxAPP_toutiaoNews.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FKuangPF%2FwxAPP_toutiaoNews?ref=badge_shield)

### 项目说明

- 微信小程序: 实现一个头条新闻
- 数据来源: 新闻数据来源于[聚合数据](https://www.juhe.cn/)

### 项目效果

#### 新闻页

|              首页               |              详情               |
| :-----------------------------: | :-----------------------------: |
| ![](./images/readme/news01.png) | ![](./images/readme/news02.png) |

搜索框使用了原生的 weui 的 searchbar 然后提示的功能在 index.js 的 search 方法定义 由于没有搜索接口 这里就不写具体功能了 制作一个简单的演示

#### 个人中心

- 个人中心页面布局使用了 we-ui cell 组件

* 编辑资料逻辑

1. 加载时先检查 storage 如果 storage 为空就根据**wx.getUserInfo**获取用户头像 昵称
2. 生日地区修改使用了 picker 通过 picker 改变 userinfo picker 里面 end 的取值的当前的日期（new Date（） 通过引入 util 里面的 util.js 实现格式化）
3. 写了个弹窗组件 里面的内容通过 slot 获取 然后使用了父子组件传值

|            个人中心             |            编辑资料             |
| :-----------------------------: | :-----------------------------: |
| ![](./images/readme/user01.png) | ![](./images/readme/user02.png) |

|            输入介绍             |            选择生日             |
| :-----------------------------: | :-----------------------------: |
| ![](./images/readme/user03.png) | ![](./images/readme/user04.png) |

### 项目提示

- 该项目接口采用的是[聚合数据-新闻头条](https://www.juhe.cn/docs/api/id/235)，每天限制 100 次，当调用次数超过时，会使用本地的 [mock](https://github.com/KuangPF/wxAPP_toutiaoNews/tree/master/mocks) 数据
- 该项目暂没有线上版本，目的在于小程序开发的学习与交流

### License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKuangPF%2FwxAPP_toutiaoNews.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FKuangPF%2FwxAPP_toutiaoNews?ref=badge_large)
