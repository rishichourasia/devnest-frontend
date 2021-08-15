import { inputPlace } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actions";

const Input = () => {
	const input = useSelector((state) => state.input);
	const dispatch = useDispatch();

	return (
		<div className="inputBox">
			<input
				type="text"
				autoComplete="none"
				value={input}
				placeholder="Enter city.."
				onChange={(e) => dispatch(inputPlace(e.target.value))}
			/>
			<button
				onClick={() => {
					dispatch(fetchData(input));
				}}
				type="button"
				className="btn btn-outline-primary"
			>
				Search
			</button>
		</div>
	);
};

export default Input;
