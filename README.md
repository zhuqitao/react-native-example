# 开发准备工作

### 环境搭建

#### 安装 cli

```
npm install -g react-native-cli
```

#### 创建项目

```
react-native init ProjectName
```

#### 项目结构

> \_\_tests\_\_/
> android/
> ios/
> App.js
> app.json
> index.js
> babel.config.js
> metro.config.js
> package.json
> .buckconfig
> .eslintrc.js
> .flowconfig
> .gitattributes
> .gitignore
> .prettierrc.js
> .watchmanconfig
> yarn.lock
> README

**_注意：本文使用的是 react-native 当前最新版本 0.61.5_**

使用最新版本的 react-native 初始化项目会自动带.eslintrc.js 和.prettierrc.js 两个文件，来帮助我们约定开发规范。

其中.eslintrc.js 文件中继承自@react-native-community/eslint-config 规范

```
module.exports = {
  root: true,
  extends: '@react-native-community',
};

```

如果想开启 eslint 和 perttier 自动检查代码和保存代码自动格式化代码，还需要做以下额外操作：

- 安装 prettier、eslint-plugin-prettier

```
yarn add prettier --dev --exact
yarn add eslint-plugin-prettier --dev --exact
```

- 设置 vscode
  打开 vscode 设置
  ![image](http://q21ledx2j.bkt.clouddn.com/react-native-example:hello-world:4.png)

- 根据自己的情况可以选择在用户或者工作专中修改 Format On Save 为选中状态
  ![image](http://q21ledx2j.bkt.clouddn.com/react-native-example:hello-world:5.png)

完成以上步骤，再开发编写代码时会自动校验

#### 开始开发

在根目录下创建 src 文件夹，我们的开发代码都写在 src 目录下。然后在 app 目录下创建根组件 app.js

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
