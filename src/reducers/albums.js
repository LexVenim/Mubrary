import { ADD_ALBUM, TOGGLE_ALBUM_IGNORE, TOGGLE_ALBUM_PRESENT, ADD_ALBUM_SOCIAL, REMOVE_ALBUM_SOCIAL, ADD_ALBUM_ALIAS, SET_ALBUM_KIND } from "../constants/ActionTypes";

export default function albums(state = [], action) {
  switch (action.type) {
  case ADD_ALBUM: 
    return addAlbum(state, action.album);
  case TOGGLE_ALBUM_IGNORE:
    return toggleAlbumIgnore(state, action.albumID);
  case TOGGLE_ALBUM_PRESENT:
    return toggleAlbumPresent(state, action.albumID);
  case ADD_ALBUM_SOCIAL:
    return addSocial(state, action.albumID, action.social);
  case REMOVE_ALBUM_SOCIAL:
    return removeSocial(state, action.albumID, action.socialName);
  case ADD_ALBUM_ALIAS:
    return addAlias(state, action.albumID, action.alias);
  case SET_ALBUM_KIND:
    return setKind(state, action.albumID, action.kind);
  }

  return state;
}

function addAlbum(state, album){

}

function toggleAlbumIgnore(state, albumId){

}

function toggleAlbumPresent(state, albumId){

}

function addSocial(state, albumId, social){

}

function removeSocial(state, albumId, socialName){

}

function addAlias(state, albumId, alias){

}

function setKind(state, albumId, kind){

}