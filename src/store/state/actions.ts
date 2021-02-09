import { 
  CounterActionType, 
  IncrementAction, 
  DecrementAction,
  ResetAction, 
  SongsActionType,
  LoadSongAction, 
  LoadSongRequestAction,
  LoadSongFailureAction,
  LoadSongSuccessAction
} from "./types";


// COUNTER
export const incrementCounter = (): IncrementAction => ({
  type: CounterActionType.INCREMENT
});

export const decrementCounter = (): DecrementAction => ({
  type: CounterActionType.DECREMENT
});

export const resetCounter = (): ResetAction => ({
  type: CounterActionType.RESET
});


// SONG
export const loadSongs = (): LoadSongAction  => ({
  type: SongsActionType.LOAD
});

export const loadSongsRequest = (): LoadSongRequestAction => ({
  type: SongsActionType.LOAD_REQUEST
});

export const loadSongsSuccess = (song:string): LoadSongSuccessAction => ({
  type: SongsActionType.LOAD_SUCCESS,
  payload: {
    song
  }
});

export const loadSongsFailure = (error: Error | string): LoadSongFailureAction => ({
  type: SongsActionType.LOAD_FAILURE,
  payload: {
    error
  }
});
