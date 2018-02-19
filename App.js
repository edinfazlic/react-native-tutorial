import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, CardSection, Header, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    this.setState({ loggedIn: false });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flex: 1 }}>
            <CardSection>
              <Button onPress={() => this.setState({ loggedIn: false })}>
                Log out
              </Button>
            </CardSection>
            <AlbumList />
          </View>
        );
      case false:
        return <LoginForm onLoginClickedObrisati={() => this.setState({ loggedIn: true })} />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={'Taylos Rift'} />
        {this.renderContent()}
      </View>
    );
  }
}
