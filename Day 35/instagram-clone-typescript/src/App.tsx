import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
		</div>
	);
}

export default App;
