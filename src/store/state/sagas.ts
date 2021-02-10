import { SongsActionType } from './types';
import { loadSongsRequest, loadSongsSuccess, loadSongsFailure } from './actions';

import { all, call, delay, put, takeEvery, take, race } from 'redux-saga/effects';
import { getSongRequest } from '../../clients/songClient';


export function* helloSaga(){
  console.log("this only happens one time")
}

function* watchOnLoadSongs() {
  yield takeEvery(SongsActionType.LOAD, onSearchSong);
}

function* onSearchSong() {
    yield put(loadSongsRequest());
    yield put(getSongRequest('david bowie', 'starman'));
    const { getSongSuccess, failure } = yield race({
      getSongSuccess: take(SongsActionType.LOAD_SUCCESS),
      failure: take(SongsActionType.LOAD_FAILURE),
    });
    getSongSuccess ? 
    yield put(loadSongsSuccess(getSongSuccess.payload.lyrics)) 
    : 
    yield put(loadSongsFailure(failure.response.data.error));
};

export default function* rootSaga() {
yield all([
    call(helloSaga),
    call(watchOnLoadSongs)
])}