import React, { useState } from "react";
import ReactDOM from "react-dom";

import "carbon-components/css/carbon-components.css";

import { FragmentComponent } from "./component.js";

const App = () => {
	const [state, setState] = useState({});

	return (
		<div>
			<FragmentComponent state={state} setState={setState} />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("root"));
