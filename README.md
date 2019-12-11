# 如何选择一个优秀的 UI 组件库

选择一个优秀的 UI 组件库对提高开发效率非常有效，本文不对某个 UI 库的使用做过多的介绍，只介绍一下目前市面上比较优秀的一些库。

#### react-native-elements

[react-native-elements](https://github.com/react-native-elements/react-native-elements)是 github 上一款开源 RN 组件库，目前获得 17.7k 的 star，是一款非常优秀的来源组件库。该库是纯 js 实现不需要 Link，同时也支持[React Native Web](https://github.com/necolas/react-native-web)。

React Native Web 是一个可以将我们的 React Native 代码运行在 web 端的库，它把 react-native 大部分组件都用 web 实现了一遍。

#### NativeBase

[NativeBase](https://github.com/GeekyAnts/NativeBase)也是 github 上一款开源的优秀项目。目前在 github 上获得 13.1k 的 star。

> 笔者当前使用的组件库就是 NativeBase，使用起来感觉有点不尽人意，某些组件 Android 和 IOS 样式差别比较大。

#### ant-design-mobile-rn

[ant-design-mobile-rn](https://github.com/ant-design/ant-design-mobile-rn)ant-design 出品，
在 github 上目前获得 1.5k 的 star。官方曾说过不再维护，后又撤销不再维护的说明文案。

#### shoutem/ui

[shoutem/ui](https://github.com/shoutem/ui)也是 github 上一款开源的优秀的组件库，目前获得 4.4k 的 star。

#### react-native-vector-icons

[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)不是一个 UI 组件库，而是一个优秀的开源 RN 图标库，图标种类繁多，基本能满足日常开发需求。

### 使用 react-native-elements

本文后续的分享将选用 react-native-elements 作为实例展示 UI 库。

#### 安装

```
yarn add react-native-elements

// 如果需要引入react-native-vector-icons作为基础图标库，执行下面命令
// react-native-vector-icons需要link之后才能使用
yarn add react-native-vector-icons
react-native link react-native-vector-icons
```

#### 小试牛刀

修改 app/App.js

```
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.root}>
        <Button title="button" />
        <Icon name="ios-american-football" type="ionicon" color="#517fa4" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

<<<<<<< HEAD
可以在模拟器上看到按钮和 Icon 图标说明 react-native-elements 和 react-native-vector-icons 安装成功。
=======

index.js 是应用入口文件。修改 index.js

```
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

```

AppRegistry 所有 React Native 应用的 JS 入口。应用的根组件（App 作为这里的根组件）应当通过 AppRegistry.registerComponent 方法注册自己。

#### 编译并运行 React Native

##### IOS

- 使用命令启动，直接在项目根目录下执行

```
react-native run-ios
```

- 使用 xcode 启动
  启动 xcode，打开项目目录下 ios/reactNativeExample.xcworkspace 文件

![image](http://q21ledx2j.bkt.clouddn.com/react-native-example:hello-world:1.png)

> 0.60 版本之后的主项目文件是.xcworkspace，不是.xcodeproj！

选择模拟器，点击运行
![image](http://q21ledx2j.bkt.clouddn.com/react-native-example:hello-world:2.png)

无论是 xcode 还是使用命令行启动，都应该在屏幕上看到模拟器运行效果。

##### Android

Android 推荐使用命令行启动。在 Android Studio 工具中启动有时候会加载不到最新代码。

首先启动 Android Studio，添加一款模拟器并启动
然后在命令行执行

```
react-native run-android
```

参考文档：
[中文文档](https://reactnative.cn/docs/getting-started/)
[官方文档](https://facebook.github.io/react-native/docs/getting-started)

### 建议

react-native 最好在 Macos 系统进行开发，虽然官方支持在 windows 上开发，但免不了会碰到许多的坑。

有条件的同学可以准备一台 Mac 笔记本，也可以在 windows 上安装双系统，某宝和某鱼自行搜索。

> > > > > > > react-native-start
