import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Button, CardSection, Header, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import AlbumList from './src/components/AlbumList';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';

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
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header title={'Taylos Rift'} />
          <LibraryList />
          {/*{this.renderContent()}*/}
        </View>
      </Provider>
    );
  }
}
