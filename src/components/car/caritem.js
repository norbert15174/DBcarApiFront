import React from "react";
import styled from "styled-components";

const CarItemWrapper = styled.div`

    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    &:nth-child(1){
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