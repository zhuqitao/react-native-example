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
