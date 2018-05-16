// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import { ADD_ALBUM, TOGGLE_ALBUM_IGNORE, TOGGLE_ALBUM_PRESENT, ADD_ALBUM_SOCIAL, REMOVE_ALBUM_SOCIAL, ADD_ALBUM_ALIAS, SET_ALBUM_KIND } from "../constants/ActionTypes";

export function addAlbum(album) {
  return {
    type: ADD_ALBUM,
    album: album
  };
}

export function toggleAlbumIgnore(albumID) {
  return {
    type: TOGGLE_ALBUM_IGNORE,
    albumID: albumID
  };
}

export function toggleAlbumPresent(albumID) {
  return {
    type: TOGGLE_ALBUM_PRESENT,
    albumID: albumID
  };
}

export function addAlbumSocial(albumID, social) {
  return {
    type: ADD_ALBUM_SOCIAL,
    albumID: albumID,
    social: social
  };
}

export function removeAlbumSocial(albumID, socialName) {
  return {
    type: REMOVE_ALBUM_SOCIAL,
    albumID: albumID,
    socialName: socialName
  };
}

export function addAlbumAlias(albumID, alias) {
  return {
    type: ADD_ALBUM_ALIAS,
    albumID: albumID,
    alias: alias
  };
}

export function setAlbumKind(albumID, kind) {
  return {
    type: SET_ALBUM_KIND,
    albumID: albumID,
    kind: kind
  };
}