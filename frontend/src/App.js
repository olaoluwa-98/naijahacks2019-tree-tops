import React from "react";
import { toast } from "react-toastify";
import { config } from "@fortawesome/fontawesome-svg-core";
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/styles/app.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

config.autoAddCss = false;

function App() {
  return <Routes />;
}

export default App;
