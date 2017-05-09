import React, { Component } from 'react';
import {
 AppRegistry ,
 View,
 Text,
 StyleSheet
} from 'react-native';
import Linh from './components/linh.js';
import Student from './components/student.js';
import {Button} from 'native-base';

export default class demoproject extends Component {
  clickme() {
    console.log('click');
  }
  render() {
    return (
      <View>
        <Button success onPress={() => { this.clickme()}} >
            <Text>Click Me! </Text>
        </Button>
      </View>
    );
  }
}
AppRegistry.registerComponent('demoproject', () => demoproject);
