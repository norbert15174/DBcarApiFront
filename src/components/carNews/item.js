import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ItemWrapper = styled.div`

    width: 80%;
    padding-top: 40px;
    padding-bottom: 40px;
`;

const Image = styled.img`

    width: 50%;
    height: 300px;
    border-radius: 3px;

`;

const CarNewsItem = (props) => (
  <ItemWrapper>
    <Image src={props.url}/>
    <h1>{props.title}</h1>
    <h3>{props.author}</h3>
    <p>
      {props.content}
    </p>
    <h3><Link link to={`/seeMore/${props.id}`}>dowiedz sie wiecej</Link></h3>
  </ItemWrapper>
);
export default CarNewsItem;
