import {
  ADD_ARTIST
  // TOGGLE_ARTIST_IGNORE,
  // ADD_ARTIST_SOCIAL,
  // REMOVE_ARTIST_SOCIAL,
  // ADD_ARTIST_ALIAS,
} from "../constants/ActionTypes";

export default function artists(state = [], action){
  switch(action.type) {
    case ADD_ARTIST:
      return addArtist(state, action.artist)
  }
  return state;
}

function addArtist(state, artist){
  
}