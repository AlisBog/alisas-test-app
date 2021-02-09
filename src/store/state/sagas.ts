import { SongsActionType } from './types';
import { loadSongsRequest, loadSongsSuccess, loadSongsFailure } from './actions';

import { all, call, delay, put, takeEvery } from 'redux-saga/effects';
import { fetchSongs } from '../../clients/songClient';


export function* helloSaga(){
  console.log("this only happens one time")
}

function* watchOnLoadSongs() {
  yield takeEvery(SongsActionType.LOAD, onSearchSong);
}

function* onSearchSong() {
  try {
    yield put(loadSongsRequest());
    // simulate slower network/ backend
    yield delay(1000);
    const { data } = yield call(fetchSongs, 'david bowie', 'starman');
    yield put(loadSongsSuccess(data.lyrics));
  } catch (error) {
    yield put(loadSongsFailure(error.response.data.error));
  }
}

export default function* rootSaga() {
yield all([
    call(helloSaga),
    call(watchOnLoadSongs)
])}