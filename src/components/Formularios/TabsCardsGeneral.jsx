import React, { useEffect } from "react";
import {getAll_Actividades } from "../../Redux/Actions/actions";
import { useState } from "react";
import BuscadorActividades from "../SearchACT";
import FormGeneral from "./FormGeneral";
import IconHeart from "../../svg/Fav";
import { useDispatch, useSelector } from "react-redux";
import {
  Div,
  ContainerCard,
  Pdescrip,
  Divact,
  Divcolunm,
  Svg,
} from "../../styledComponents/act_styled";



function TabsCards_General() {
  const dispatch = useDispatch();

  const ACT = useSelector((state) => state.ACT);
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {
    dispatch( getAll_Actividades ())
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >Tourist activities
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
          <  BuscadorActividades />
        
            <h2>
              {ACT.length > 0 &&
                ACT[0].map((e) => {
                  return (
                    <ContainerCard>
                      <Svg>
                        <IconHeart />
                      </Svg>
                      <Divact>
                        <Divcolunm>
                          <Pdescrip>Name</Pdescrip>
                          {e.name}
                        </Divcolunm>

                        <Divcolunm>
                          <Pdescrip>Season</Pdescrip>
                          {e.temporada}
                        </Divcolunm>
                        <Divcolunm>
                          <Pdescrip>Duration </Pdescrip>
                          {e.duracion}
                        </Divcolunm>
                        <Divcolunm>
                          <Pdescrip>Difficulty</Pdescrip>
                          {e.dificultad}
                        </Divcolunm>
                      </Divact>
                    </ContainerCard>
                  );
                })}
            </h2>
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Add Activity</h2>
          <hr />
          <Div>
            <FormGeneral />
          </Div>
        </div>

      </div>
    </div>
  );
}

export default TabsCards_General;
