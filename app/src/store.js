import {createStore, combineReducers /*applyMiddleware*/} from 'redux';
//import createSagaMiddleware from 'redux-saga';



import imageReducer from './reducers/imageReducer';
//import storeSaga from './sagas'

//const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    imageReducer: imageReducer
})

const configureStore = () => createStore(
    rootReducer,
    /*applyMiddleware(sagaMiddleware)*/
);

//sagaMiddleware.run(storeSaga)

export default configureStore;