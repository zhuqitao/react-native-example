# React Native分享

### 介绍
笔者目前是从事React Native开发工程师，开发RN的这段时间遇到了许多问题（有的已经解决有的尚未找到好的解决方案），应对各种业务场景也总结了一些经验，分享出来望对想进一步了解RN的同学有所帮助。本文不会过多的去讲解官方文档已有的知识点，而是从企业开发的角度来分享一下RN开发过程中各种业务需求的实现，以及RN开发过程中遇到的所有问题。

### 一个五脏俱全的小Demo
笔者自己开发的一个RN小Demo，项目不大，但是涵盖了本章介绍的所有知识点，目的不是为了让大家去关心业务需求，而是对本文分享的知识点有更直观的了解，Demo项目会跟随该分享一起更新。

### 分享
**本文主要涉及到的知识点包括：**
- 我的第一个hello-world项目
- RN应该怎样调试
- 如何选择一个优秀的UI组件库
- RN路由的选择与使用
- RN如何优雅的使用Webview嵌入H5网页
- RN图片处理(本地图片、base64、网络图片URL)以及操作本地文件
- LeanCloud发布RN项目热跟新和发布新客户端
- RN测试版与生产版发布以及二者如何共存
- RN如何实现微信分享、登录、支付以及其他微信相关工能
- RN如何唤醒APP Store或Android应用商店
- 我总结的RN在Android和IOS存在的兼容问题
### 项目结构
项目采用不同的分支实现不用的功能实例，以免每次案例学习都使用react-native init ProjectName来创建一个新的项目。
### react-native实例
[第一个hello-world项目](https://github.com/zhuqitao/react-native-example/tree/react-native-hello-world)