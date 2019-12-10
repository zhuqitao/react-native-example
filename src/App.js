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
