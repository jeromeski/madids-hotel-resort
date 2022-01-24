import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/sass/main.scss";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
