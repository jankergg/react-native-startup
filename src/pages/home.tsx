import React, {Component} from 'react';
// import {Button} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import Watch from './use-hooks/watch';
import {RecordItem} from './use-hooks/watchRecord';

export default class HomeScreen extends Component<NavigationStackScreenProps> {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    const initRecords: RecordItem[] = [];
    return (
      <>
        <Watch
          records={initRecords}
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      </>
    );
  }
}
