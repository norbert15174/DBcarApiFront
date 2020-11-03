import React from "react";
import styled from "styled-components";
import CarNewsItem from "./item";

const CarNewsWrapper = styled.div`
  position: relative;
  z-index: 500;
  color: white;
  padding: 20px 20px 20px 20px;
`;

const Find = styled.input`
  position: relative;
  width: 300px;
  padding: 10px 10px 10px 10px;
  left: calc(50% - 150px);
  margin-bottom: 50px;
  background: none;
  border: 1px solid white;
  color: white;
  &:focus {
    border: 1px solid white;
    outline: none;
  }
`;

class CarNews extends React.Component {
  state = {
    data: [],
    isReady: "",
  };

  async componentDidMount() {
    await fetch("http://localhost:8080/carnews")
      .then((response) => response.json())
      .then((data) => this.setState({ data, isReady: "yes" }));
  }

  async findHandler(e) {
    this.setState({
      isReady: "no",
    });
    if (e.target.value === "") {
      this.componentDidMount();
    } else {
      await fetch("http://localhost:8080/carnews/name/" + e.target.value)
        .then((response) => response.json())
        .then((data) => this.setState({ data, isReady: "yes" }));
    }
  }

  render() {
    return (
      <CarNewsWrapper>
        <Find placeholder="search" onChange={(e) => this.findHandler(e)} />

        {this.state.isReady === "yes" ? (
          <>
            {this.state.data.map((dane) => (
              <CarNewsItem
                key={dane.id}
                url={dane.urlToImage}
                author={dane.author}
                description={dane.description}
                title={dane.title}
                id={dane.id}
              ></CarNewsItem>
            ))}
          </>
        ) : null}
      </CarNewsWrapper>
    );
  }
}

export default CarNews;
