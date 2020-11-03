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

`;

const ArticleHref = styled.a`

  color: white;


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
    {props.content ? null : <Header3><LinkToArticle link to={`/seeMore/${props.id}`}>dowiedz sie wiecej</LinkToArticle></Header3>}
  </ItemWrapper>
);
export default CarNewsItem;
