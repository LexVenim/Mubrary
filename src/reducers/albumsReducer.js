import {
  ADD_ALBUM
  // TOGGLE_ALBUM_IGNORE,
  // TOGGLE_ALBUM_PRESENT,
  // ADD_ALBUM_SOCIAL,
  // REMOVE_ALBUM_SOCIAL,
  // ADD_ALBUM_ALIAS,
  // SET_ALBUM_KIND
} from "../constants/ActionTypes";

export default function albums(state = [], action){
  switch(action.type) {
    case ADD_ALBUM:
      return addAlbum(state, action.album)
  }
  return state;
}

function addAlbum(state, album){
  
}