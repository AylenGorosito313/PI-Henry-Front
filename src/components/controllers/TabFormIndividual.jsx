import React from "react";
import { useSelector } from "react-redux";
import IconHeart from "../../svg/Fav";
import {
    Div,
    ContainerCard,
    Pdescrip,
    Divact,
    Divcolunm,
    Svg
  } from "../../styledComponents/act_styled";
  
function TabFormIndividual() {
    const countriesCards= useSelector((state) => state.filInd);
  
  
    return (
  <>
   { countriesCards.length > 0 &&
                 countriesCards[0]?.map((e) => {
                  return (
                    <ContainerCard>
                       
                       <Svg><IconHeart/></Svg> 
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
  </>
  );
}

export default TabFormIndividual;
