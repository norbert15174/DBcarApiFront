import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ItemWrapper = styled.div`

    width: 80%;
    padding-top: 40px;
    padding-bottom: 40px;
    position: relative;
    z-index: 10;
    color: white;
`;

const Image = styled.img`

    width: 50%;
    height: 300px;
    border-radius: 3px;

`;

const Header3 = styled.h3`

  color: white;

`;

const LinkToArticle = styled(Link)`

    color: white;
    font-weight: 500;
    text-decoration: none;
`;

const ArticleHref = styled.a`

  color: white;


`;

const LinkButton = styled.button`
  position: relative;
  width: 320px;
  padding: 10px 5px 10px 10px;
  top: 20px;
  text-align: center;
  left: 0;
  color: white;
  font-size: 18px;
  
  background-color: #b30000;
  border-radius: 4px;
  margin-bottom: 30px;
  margin-left: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;


const CarNewsItem = (props) => (
  <ItemWrapper>
    <h1>{props.content ? props.title : null}</h1>
    <Image src={props.url}/>
    
      {props.content ? <p>źródło: <ArticleHref href={props.urlToNews}>{props.url}</ArticleHref></p> : null}
    
    <h1>{props.content ? null : props.title}</h1>
    <Header3>{props.author}</Header3>
    <p>
      {props.content ? props.content : props.description}
    </p>
    {props.content ? null : <LinkButton><LinkToArticle link to={`/seeMore/${props.id}`}>Dowiedz sie wiecej</LinkToArticle></LinkButton>}
  </ItemWrapper>
);
export default CarNewsItem;
