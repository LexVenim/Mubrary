import { combineReducers } from "redux";

import artists from "./artists";
import albums from "./albums";

const reducer = combineReducers({
  artists,
  albums
});

export default reducer;