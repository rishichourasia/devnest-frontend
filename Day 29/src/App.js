import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import Card from "./components/Card";
import { useSelector } from "react-redux";
import ToggleTheme from "./components/ToggleTheme";

function App() {
	const theme = useSelector((state) => state.theme);
	console.log(theme);
	return (
		<div className={theme ? "container-fluid App dark" : "container-fluid App"}>
			<Input />
			<Card />
			<ToggleTheme />
		</div>
	);
}

export default App;
