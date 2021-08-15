import axios from "axios";

const inputPlace = (place) => {
	return {
		type: "INPUT_PLACE",
		payload: place,
	};
};

const fetchData = (input) => {
	return (dispatch) => {
		axios
			.get(
				`http://api.weatherapi.com/v1/current.json?key=dbb41598fe5347d583d60354211508&q=${input}`
			)
			.then((res) => {
				const data = res.data;
				console.log(data);
				dispatch({
					type: "FETCH_DATA",
					payload: data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const toggleTheme = () => {
	return {
		type: "TOGGLE_THEME",
	};
};

export { inputPlace, fetchData, toggleTheme };
