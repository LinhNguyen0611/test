import React, { Component } from 'react';
import {
 View,
 Text,
 StyleSheet
} from 'react-native';

export default class Linh extends Component {
  render(){
    return (
      <View>
        <Text style={styles.chulon}>
          Linh Linh xinh dep
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  chulon: {
    fontSize: 20
  }
})
