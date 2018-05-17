import { combineReducers } from "redux";

import artists from './artistsReducer';
import albums from './albumsReducer';

const reducer = combineReducers({
  artists,
  albums
});

export default reducer;