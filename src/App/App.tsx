import React from "react";

import ReactDOM from "react-dom";

import { SmartComponent } from "../SmartComponent/SmartComponent.tsx";

function App() {
  return <SmartComponent />;
}

ReactDOM.render(<App />, document.getElementById("app"));
