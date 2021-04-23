import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_POSTS, REQUEST_POSTS} from './actions/types'
import { addImage } from './actions/image';

let axios = require("axios");
let MockAdapter = require("axios-mock-adapter");
 // This sets the mock adapter on the default instance
let mock = new MockAdapter(axios);
 // Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/users").reply(200, {
  galaryName:"axios-mock-adapter test, app name REFLECT",
});


export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker(action) {
  try {
    console.log(action.data)
    yield put(addImage(action.data))
    const payload = yield call(fetchPosts)
    //console.log(payload)
    yield put({ type: FETCH_POSTS, payload })
  } catch (e) {
    console.log('receiving data failed')
  }
}

async function fetchPosts() {
  let fetched;
  await axios.get("/users").then(function (response) {
   fetched =  response.data

  });
  return fetched;
}