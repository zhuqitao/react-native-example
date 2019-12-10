# 搭建一个hello world项目
### 环境搭建
#### 安装cli
```
npm install -g react-native-cli
```
#### 创建项目
```
react-native init ProjectName
```
#### 项目结构
.
├── App.js
├── README
├── \_\_tests\_\_
│   └── App-test.js
├── android
├── app.json
├── babel.config.js
├── index.js
├── ios
├── metro.config.js
├── package.json
├── tree.text
└── yarn.lock

***注意：本文使用的是react-native当前最新版本0.61.5***

在根目录下创建src文件夹，我们的开发代码都写在src目录下。然后在app目录下创建根组件app.js
```
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.root}>
        <Text allowFontScaling={false} style={styles.helloWorld}>
          Hello World
        </Text>
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
  helloWorld: {
    fontSize: 20,
    color: '#666',
  },
});

```
index.js是应用入口文件。修改index.js
```
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

```
AppRegistry所有 React Native 应用的 JS 入口。应用的根组件（App作为这里的根组件）应当通过AppRegistry.registerComponent方法注册自己。

#### 编译并运行 React Native 
##### IOS
- 使用命令启动，直接在项目根目录下执行
```
react-native run-ios
```
- 使用xcode启动
启动xcode，打开项目目录下 ios/reactNativeExample.xcworkspace文件

![image](http://q21ledx2j.bkt.clouddn.com/react-native-example:hello-world:1.png)

> 0.60版本之后的主项目文件是.xcworkspace，不是.xcodeproj！

选择模拟器，点击运行
![image](http://q21ledx2j.bkt.clouddn.com/react-native-example:hello-world:2.png)

无论是xcode还是使用命令行启动，都应该在屏幕上看到模拟器运行效果。

##### Android
Android推荐使用命令行启动。在Android Studio工具中启动有时候会加载不到最新代码。

首先启动Android Studio，添加一款模拟器并启动
然后在命令行执行
```
react-native run-android
```

参考文档：
[中文文档](https://reactnative.cn/docs/getting-started/)
[官方文档](https://facebook.github.io/react-native/docs/getting-started)
### 建议
react-native最好在Macos系统进行开发，虽然官方支持在windows上开发，但免不了会碰到许多的坑。

有条件的同学可以准备一台Mac笔记本，也可以在windows上安装双系统，某宝和某鱼自行搜索。