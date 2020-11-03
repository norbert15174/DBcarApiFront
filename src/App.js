import "./App.css";
import React from "react";
import Menu from "./components/menu/menu";
import styled from "styled-components";
import CarNews from "./components/carNews/carnews";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import CarNewsItem from "./components/carNews/item";
import Car from "./components/car/car";

const BG = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: url("http://bit.ly/2gPLxZ4"); */
  background-image: url("https://wallpaperaccess.com/full/294788.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  -webkit-font-smoothing: antialiased;
  z-index: -5;
`;

const BlBoc = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  top: 5%;
  left: 10%;
  background: inherit;
  border-radius: 2px;
  overflow: hidden;
  padding: 20px 20px 20px 20px;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    position: absolute;
    bottom: 0;
    box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.05);
    filter: blur(10px);
    padding: 20px 20px 20px 20px;
  }
`;

class UserComponent extends React.Component {
  userId = this.props.match.params;

  state = {
    data: "",
    isready: "",
  };

  async componentDidMount() {
    await fetch("http://localhost:8080/carnews/" + this.userId.id)
      .then((response) => response.json())
      .then((data) => this.setState({ data, isReady: "yes" }));
  }

  render() {
    return (
      <>
        {this.state.isReady === "yes" ? (
          <CarNewsItem
            url={this.state.data.urlToImage}
            urlToNews={this.state.data.url}
            author={this.state.data.author}
            description={this.state.data.description}
            title={this.state.data.title}
            id={this.state.data.id}
            content={this.state.data.content}
          ></CarNewsItem>
        ) : null}
      </>
    );
  }
}

function App() {
  return (
    <Router>
      <BG>
        <Menu />
        <BlBoc>
          <Switch>
            <Route path="/CarNews">
              <Scrollbars>
                <CarNews></CarNews>
              </Scrollbars>
            </Route>

            <Route path="/Car">
              <Scrollbars>
                <Car></Car>
              </Scrollbars>
            </Route>
            <Route path="/seeMore/:id" component={UserComponent}></Route>
          </Switch>
        </BlBoc>
      </BG>
    </Router>
  );
}

export default App;
