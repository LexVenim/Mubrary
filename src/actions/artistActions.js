import {
  ADD_ARTIST
  // TOGGLE_ARTIST_IGNORE,
  // ADD_ARTIST_SOCIAL,
  // REMOVE_ARTIST_SOCIAL,
  // ADD_ARTIST_ALIAS,
} from "../constants/ActionTypes";

export function addArtist(artist){
  return {
    type: ADD_ARTIST,
    artist: artist
  }
}