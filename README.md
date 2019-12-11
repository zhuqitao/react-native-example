# React Native 分享

### 介绍

面包是需要的，牛奶是需要的，React Native 也是需要的。贫富乃人生常事，进步是致富之本。笔者目前是从事 React Native 开发工程师，开发 RN 的这期间遇到了一些坑（有的已经解决有的尚未找到好的解决方案），应对各种业务场景也总结了一些经验，分享出来望对想进一步了解 RN 的同学有所帮助。本文不会过多的去讲解官方文档已有的知识点，而是从企业开发的角度来分享一下 RN 开发过程中各种业务需求的实现，以及 RN 开发过程中遇到的所有问题。

### 一个五脏俱全的小 Demo

笔者自己开发的一个小 Demo，包括后端（Spring Boot）、APP 端（React Native）、H5 网页端（React）、小程序端，其中 APP 端涵盖了本章介绍的所有知识点，目的不是为了让大家去关心业务需求，而是对本文分享的知识点有更直观的了解，Demo 项目会跟随该分享一起更新。

### 项目结构

项目采用不同的分支实现不用的功能实例，以免每次案例学习都使用 react-native init ProjectName 来创建一个新的项目。

### 分享

**本文主要涉及到的知识点包括：**

- [开发准备工作](https://github.com/zhuqitao/react-native-example/tree/react-native-start)
- [选择一个优秀的 UI 组件库](https://github.com/zhuqitao/react-native-example/tree/react-native-ui)
- RN 应该怎样调试
- RN 路由的选择与使用
- RN 如何优雅的使用 Webview 嵌入 H5 网页
- RN 图片处理(本地图片、base64、网络图片 URL)以及操作本地文件
- LeanCloud 发布 RN 项目热跟新和发布新客户端
- RN 测试版与生产版发布以及二者如何共存
- RN 如何实现微信分享、登录、支付以及其他微信相关工能
- RN 如何唤醒 APP Store 或 Android 应用商店
- 我总结的 RN 在 Android 和 IOS 存在的兼容问题
