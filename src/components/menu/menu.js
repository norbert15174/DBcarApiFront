import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuWrapper = styled.div`
  width: 100vw;
  height: 80px;
  position: relative;
  display: grid;
  justify-content: center;
  padding-top: 10px;
  grid-template-columns: 200px 200px;
  background-color: rgba(255,255,255,0.4);
  


`;



const Nav = styled(NavLink)`
  padding: 20px 20px 20px 20px;
  position: relative;
    text-decoration: none;
    font-size: 20px;
    color: #464646;
    z-index: 50;
`;

const Menu = () => (
  <MenuWrapper>

      <Nav
      link to="/faq"
      activeStyle={{
        fontWeight: "bold",
      }}
    >
      Car News
    </Nav>
    <Nav
      to="/faq2"
      activeStyle={{
        fontWeight: "bold",
      }}
    >
      Cars
    </Nav>
    
  </MenuWrapper>
);

export default Menu;
