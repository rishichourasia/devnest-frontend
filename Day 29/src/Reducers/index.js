import { combineReducers } from "redux";
import InputReducer from "./InputReducer";
import CardReducer from "./CardReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
	input: InputReducer,
	fetchData: CardReducer,
	theme: themeReducer,
});

export default rootReducer;
