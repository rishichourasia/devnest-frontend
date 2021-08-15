const InputReducer = (state = "", action) => {
	if (action.type === "INPUT_PLACE") {
		return action.payload;
	}
	return state;
};

export default InputReducer;
