import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {Store, persistor} from './app/store/';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './app/navigation/Routes';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="000" barStyle={'light-content'} />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
