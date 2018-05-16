import { ADD_ARTIST, TOGGLE_ARTIST_IGNORE, ADD_ARTIST_SOCIAL, REMOVE_ARTIST_SOCIAL, ADD_ARTIST_ALIAS } from "../constants/ActionTypes";

export default function artists(state = [], action) {
  switch (action.type) {
  case ADD_ARTIST: 
    return addArtist(state, action.artist);
  case TOGGLE_ARTIST_IGNORE:
    return toggleArtistIgnore(state, action.artistID);
  case ADD_ARTIST_SOCIAL:
    return addSocial(state, action.artistID, action.social);
  case REMOVE_ARTIST_SOCIAL:
    return removeSocial(state, action.artistID, action.socialName);
  case ADD_ARTIST_ALIAS:
    return addAlias(state, action.artistID, action.alias);
  }

  return state;
}

function addArtist(state, artist){

}

function toggleArtistIgnore(state, artistId){

}

function addSocial(state, artistId, social){

}

function removeSocial(state, artistId, socialName){

}

function addAlias(state, artistId, alias){

}