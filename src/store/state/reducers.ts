import { 
  CounterActionType, 
  CounterState, SongsState, 
  CounterActions, 
  SongsActionType, 
  SongsActions, 
  LoadSongSuccessAction 
} from "./types";
import { Action, combineReducers } from "redux";


// COUNTER
const initialCounterState: CounterState = {
  count: 0
}

export const count = (
  state: CounterState = initialCounterState,
  action: Action | CounterActions
): CounterState => {
  switch (action.type) {
    case CounterActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    case CounterActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case CounterActionType.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};


// SONG
const initialSongsState: SongsState= {
  song: '',
  loading: false
}

export const songs = (
  state: SongsState = initialSongsState,
  action: Action | SongsActions
): SongsState => {
  switch (action.type) {
    case SongsActionType.LOAD_REQUEST:
      return { ...state, loading:true };
    case SongsActionType.LOAD_SUCCESS:
      return { ...state, loading:false, song: (action as LoadSongSuccessAction).payload.song };  //(action as LoadSongSuccessAction).payload.song
    default:
      return state;
  }
};


export const createRootReducer = () => {
  return combineReducers({
    count,
    songs
  })
}

//export default count;
