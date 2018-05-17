import {
  ADD_ALBUM
  // TOGGLE_ALBUM_IGNORE,
  // TOGGLE_ALBUM_PRESENT,
  // ADD_ALBUM_SOCIAL,
  // REMOVE_ALBUM_SOCIAL,
  // ADD_ALBUM_ALIAS,
  // SET_ALBUM_KIND
} from "../constants/ActionTypes";

export function addAlbum(album){
  return {
    type: ADD_ALBUM,
    album: album
  }
}