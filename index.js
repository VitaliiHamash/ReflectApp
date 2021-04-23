import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import {sagaWatcher} from './src/redux/sagas';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import imageReducer from './src/redux/reducers/imageReducer';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware()
const rootReducer = combineReducers({ imageReducer: imageReducer })
const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(sagaWatcher)

const ReduxTutorial = () =>
<Provider store={store}>
    <App />
</Provider>

AppRegistry.registerComponent(appName, () => ReduxTutorial);