import { Action } from 'redux';

export interface CounterState {
    count: number;
}

export interface SongsState {
    song: string,
    loading: boolean
}

export interface ApplicationState {
    count: CounterState;
    songs: SongsState
}

export enum CounterActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    RESET = "RESET"
}

export enum SongsActionType {
    LOAD = "LOAD",
    LOAD_REQUEST = "LOAD_REQUEST",
    LOAD_SUCCESS = "LOAD_SUCCESS",
    LOAD_FAILURE = "LOAD_FAILURE",
}

export interface IncrementAction extends Action {
    type: CounterActionType.INCREMENT;
}

export interface DecrementAction extends Action {
    type: CounterActionType.DECREMENT;
}

export interface ResetAction extends Action {
    type: CounterActionType.RESET;
}

export type CounterActions = IncrementAction | DecrementAction | ResetAction;


export interface LoadSongAction extends Action {
    type: SongsActionType.LOAD;
}

export interface LoadSongRequestAction extends Action {
    type: SongsActionType.LOAD_REQUEST;
}

export interface LoadSongSuccessAction extends Action {
    type: SongsActionType.LOAD_SUCCESS;
    payload: {
        song: string
    }
}

export interface LoadSongFailureAction extends Action {
    type: SongsActionType.LOAD_FAILURE;
    payload: {
        error : Error | string
    }
}

export type SongsActions = 
LoadSongAction | 
LoadSongRequestAction | 
LoadSongSuccessAction | 
LoadSongFailureAction;

