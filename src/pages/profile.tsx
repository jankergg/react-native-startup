import React, {Component} from 'react';
import {Button} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

export default class ProfileScreen extends Component<NavigationStackScreenProps> {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go Home"
        onPress={() => navigate('Home', {name: 'Welcome back!'})}
      />
    );
  }
}
