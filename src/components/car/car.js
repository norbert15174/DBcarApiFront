import React from "react";
import styled from "styled-components";
import CarItem from "./caritem";

const CarWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 8;
`;


class Car extends React.Component {
  state = {
    data: "",
    isReady: "",
  };

  async componentDidMount() {
    await fetch("http://localhost:8080/car")
      .then((response) => response.json())
      .then((data) => this.setState({ data, isReady: "yes" }));
  }

  render() {
    return (
      <CarWrapper>
        <CarItem id="id" brand="brand" color="color" date="date"></CarItem>
        {this.state.isReady === "yes" ? (
          <>
            {this.state.data.map((dane) => (
              <CarItem
                key={dane.id}
                id={dane.id}
                brand={dane.brand}
                color={dane.color}
                date={dane.date}
              />
            ))}
          </>
        ) : null}
      </CarWrapper>
    );
  }
}

export default Car;
