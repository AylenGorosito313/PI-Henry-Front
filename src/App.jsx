
// require("dotenv").config();
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Presentacion from "./components/controllers/PresentacionC";
import TabsCards from "../src/components/TabsCards";
import TabsCardsGeneral from "./components/Formularios/TabsCardsGeneral";

import axios from "axios";
// const {PORT_HOST} = process.env;
axios.defaults.baseURL = "https://countriesdeploy.onrender.com/";

function App() {
  return (
    <>
      <Route exact path="/">
        <Presentacion />
      </Route>
      
      <Route path="/">
        <Nav />
      </Route>
      <Route exact path="/actividades/:id">
        <TabsCards />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/actividades">
        <TabsCardsGeneral />
      </Route>
    </>
  );
}

export default App;
