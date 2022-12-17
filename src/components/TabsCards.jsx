import React, { useEffect } from "react";
import "./tabs_styled.css";
import { useState } from "react";
import "./tabs_styled.css";
import { GetActIndividual } from "../Redux/Actions/actions";
import IconHeart from "../svg/Fav";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import BuscadorActividadesIND from "./controllers/BuscadorActividadesIND";
import TabFormIndividual from "./controllers/TabFormIndividual";
import {
  Div,
  ContainerCard,
  Pdescrip,
  Divact,
  Divcolunm,
  Svg,
} from "../styledComponents/act_styled";

export default function TabsCards() {
  const dispatch = useDispatch();
  const countriesID = useSelector((state) => state.filInd);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    dispatch(GetActIndividual(""));
  }, [toggleState]);

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Tourist activities
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Add Activity
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Tourist activities </h2>
          <hr />
          <BuscadorActividadesIND />
          <p>
            <TabFormIndividual />
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Add Activity</h2>
          <hr />
          <Div>
            <Form />
          </Div>
        </div>
      </div>
    </div>
  );
}
