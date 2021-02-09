import axios from "axios";

interface songResponse {
  lyrics: string;
}

export async function fetchSongs(
  artist: string,
  song: string
): Promise<songResponse> {
  return await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}
