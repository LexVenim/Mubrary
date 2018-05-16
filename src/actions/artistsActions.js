// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import { ADD_ARTIST, TOGGLE_ARTIST_IGNORE, ADD_ARTIST_SOCIAL, REMOVE_ARTIST_SOCIAL, ADD_ARTIST_ALIAS } from "../constants/ActionTypes";

export function addArtist(artist) {
  return {
    type: ADD_ARTIST,
    artist: artist
  };
}

export function toggleArtistIgnore(artistID) {
  return {
    type: TOGGLE_ARTIST_IGNORE,
    artistID: artistID
  };
}

export function addArtistSocial(artistID, social) {
  return {
    type: ADD_ARTIST_SOCIAL,
    artistID: artistID,
    social: social
  };
}

export function removeArtistSocial(artistID, socialName) {
  return {
    type: REMOVE_ARTIST_SOCIAL,
    artistID: artistID,
    socialName: socialName
  };
}

export function addArtistAlias(artistID, alias) {
  return {
    type: ADD_ARTIST_ALIAS,
    artistID: artistID,
    alias: alias
  };
}