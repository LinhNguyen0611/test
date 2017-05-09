/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Student extends Component {
  render() {
    return (
      <View>
        <Text>Ho va ten: {this.props.name}</Text>
        <Text>MSSV: {this.props.mssv}</Text>
      </View>
    );
  }
}
