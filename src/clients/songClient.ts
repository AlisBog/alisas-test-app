import { SongsActionType } from './../store/state/types';
import axios from "axios";
import { RSAA } from 'redux-api-middleware';


interface songResponse {
  lyrics: string;
}

// export async function getSongRequest(
//   artist: string,
//   song: string
// ): Promise<songResponse> {
//   return await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
// }

export function getSongRequest(
  artist: string,
  song: string
) {
  return {
    [RSAA]: {
      endpoint: `https://api.lyrics.ovh/v1/${artist}/${song}`,
      method: 'GET',
      types: [
        SongsActionType.LOAD_REQUEST, 
        SongsActionType.LOAD_SUCCESS, 
        SongsActionType.LOAD_FAILURE]
    },
    type: 'RSAA',
  }
}

