import React from "react";
import styled from "styled-components";

const CarItemWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 25%);
  border-bottom: 1px solid black;
  &:nth-child(1) {
    color: white;
    border-radius: 5px;
    background-color: #262323;
  }
  & h1:nth-child(1){
      color: white;
  }
`;

const CarItem = (props) => (
  <CarItemWrapper>
    <h1>{props.id}</h1>
    <h1>{props.brand}</h1>
    <h1>{props.color}</h1>
    <h1>{props.date}</h1>
  </CarItemWrapper>
);

export default CarItem;
