import React from "react";
import {BrowserRouter} from "react-router-dom";
import "./App.css";
import LandingPage from "./page/landingPage";
import Navbar from "./component/navbar";
import FooTer from "./component/fooTer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = (useNavigate) => {
  return (
    <BrowserRouter>
      <Navbar />
      <LandingPage />

      <FooTer />
    </BrowserRouter>
  );
};

export default App;
