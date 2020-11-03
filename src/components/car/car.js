import React from "react";
import styled from "styled-components";
import CarItem from "./caritem";
import AddItem from "./carAddItem";

const Wrap = styled.div`
  width: 100%;
  position: relative;
  z-index: 8;
`;

const AddButton = styled.button`
  position: relative;
  width: 120px;
  padding: 10px 05px 10px 10px;
  text-align: center;
  color: white;
  background-color: #b30000;
  border-radius: 4px;
  margin-bottom: 30px;
  left: calc(95% - 360px);
  margin-left: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const ItemOption = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

class Car extends React.Component {
  state = {
    data: "",
    isReady: "",
    clicked: "no",
    modify: "no",
    search: "no",
    itemsSearch: '',
  };

  async componentDidMount() {
    await fetch("http://localhost:8080/car")
      .then((response) => response.json())
      .then((data) => this.setState({ data, isReady: "yes" }));
  }

  handleAddItem = () => {
    this.setState({
      clicked: this.state.clicked === "yes" ? "no" : "yes",
    });
  };
  handleModifyItem = () => {
    this.setState({
      modify: this.state.modify === "yes" ? "no" : "yes",
    });
  };
  handleSearchItem = () => {
    this.setState({
      search: this.state.search === "yes" ? "no" : "yes",
    });
  };
  dzialajKurwa = (dane) =>{
    this.setState({isReady: 'no'});

    this.setState({
      data: dane,
      isReady: 'yes'
    })


  }

  render() {
    return (
      <Wrap>
        <AddButton onClick={this.handleAddItem}>addItem</AddButton>
        <AddButton onClick={this.handleModifyItem}>ModifyItem</AddButton>
        <AddButton onClick={this.handleSearchItem}>Search</AddButton>

        <ItemOption>
          
          {this.state.clicked === "yes" && this.state.isReady === "yes" ? <AddItem add dane={this.state.data}/> : null}
          {this.state.modify === "yes" && this.state.isReady === "yes" ? <AddItem modify dane={this.state.data}/> : null}
          {this.state.search === "yes" && this.state.isReady === "yes" ? <AddItem search fn={this.dzialajKurwa} dane={this.state.data}/> : null}
        </ItemOption>
        <div>
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
        </div>
      </Wrap>
    );
  }
}

export default Car;
