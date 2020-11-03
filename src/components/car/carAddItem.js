import React, { useState } from "react";
import styled from "styled-components";

const AddItemWrapper = styled.div`
  position: relative;
  width: 90%;
  left: 5%;
  padding: 20px 20px 20px 20px;
  display: grid;
  grid-template-columns: 800px;
  opacity: 1;
  animation: slidein 1s;

  @keyframes slidein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const AddItemInput = styled.input`
  position: absolute;
  left: 150px;
  width: 200px;
  margin-bottom: 30px;
  padding: 10px 10px 10px 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #b30000;
  color: #b30000;
  font-weight: 300;
  &::placeholder {
    color: black;
  }
`;

const InputLabel = styled.label`
  color: #b30000;
  width: 140px;
  position: absolute;
  top: 5px;
  font-size: 18px;
  font-weight: 600;
  text-align: right;
  left: 0;
`;

const InputAndLabelDiv = styled.div`
  position: relative;
  height: 50px;
`;

const AddButton = styled.button`
  position: relative;
  width: 220px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  color: white;
  background-color: #b30000;
  border-radius: 4px;
  margin-bottom: 30px;
  left: calc(150px);
  outline: none;
  border: none;
  cursor: pointer;
`;

const SelectIn = styled.select`
  position: absolute;
  left: 150px;
  width: 222px;
  margin-bottom: 30px;
  padding: 10px 10px 10px 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #b30000;
  color: #b30000;
  font-weight: 300;
  &::placeholder {
    color: black;
  }
`;

const AddItem = (props) => {
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [dateFrom, setDatefrom] = useState("");
  const [dateTo, setDateto] = useState("");

  var handleModify = (e, d) => {
    d.dane.map((danaEach) => {
      if (danaEach.id === parseInt(e.target.value)) {
        setId(danaEach.id);
        setBrand(danaEach.brand);
        setColor(danaEach.color);
        setDatefrom(danaEach.date);
      }

      return 0;
    });
  };

  async function handleItemModify() {
    await fetch("http://localhost:8080/car/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        brand: brand,
        color: color,
        date: dateFrom,
      }),
    });
    window.location.reload();
  }
  async function handleItemAdd() {
    await fetch("http://localhost:8080/car/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        brand: brand,
        color: color,
        date: dateFrom,
      }),
    });
    window.location.reload();
  }
  async function handleItemSearch(a) {

    if(id!==""){
      await fetch("http://localhost:8080/car/" + id)
      .then((response) => response.json())
      .then((data) => a(data));
    }else if(dateFrom!=="" && dateTo!==""){
      await fetch("http://localhost:8080/car/date?dateFrom=" + dateFrom + "&dateTo=" + dateTo)
      .then((response) => response.json())
      .then((data) => a(data));
    }else if(brand!==""){
      await fetch("http://localhost:8080/car/brand/" + brand)
      .then((response) => response.json())
      .then((data) => a(data));
    }


    
    
  }

  return (
    <AddItemWrapper>
      {props.modify ? <h1>Modify</h1> : null}
      {props.add ? <h1>Add Item</h1> : null}
      {props.search ? <h1>Search</h1> : null}

      <InputAndLabelDiv>
        <InputLabel>id</InputLabel>
        {props.modify || props.search ? (
          <SelectIn
            name="id"
            onChange={
              props.modify
                ? (e, d) => handleModify(e, props)
                : (e) => setId(e.target.value)
            }
          >
            {props.dane.map((danaEach) => (
              <option>{danaEach.id}</option>
            ))}
          </SelectIn>
        ) : (
          <AddItemInput
            name="id"
            id="fname"
            type="number"
            placeholder="id"
            onChange={(e) => setId(e.target.value)}
            value={id}
          ></AddItemInput>
        )}
      </InputAndLabelDiv>

      <InputAndLabelDiv>
        <InputLabel>brand</InputLabel>
        <AddItemInput
          type="text"
          name="brand"
          placeholder="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        ></AddItemInput>
      </InputAndLabelDiv>

      <InputAndLabelDiv>
        <InputLabel>color</InputLabel>
        <AddItemInput
          type="text"
          name="color"
          placeholder="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></AddItemInput>
      </InputAndLabelDiv>

      <InputAndLabelDiv>
        <InputLabel>{props.search ? "Od" : "data"}</InputLabel>
        <AddItemInput
          type="date"
          name="data"
          value={dateFrom}
          onChange={(e) => setDatefrom(e.target.value)}
        ></AddItemInput>
      </InputAndLabelDiv>

      {props.search ? (
        <InputAndLabelDiv>
          <InputLabel>Do</InputLabel>
          <AddItemInput
            type="date"
            name="data"
            value={dateTo}
            onChange={(e) => setDateto(e.target.value)}
          ></AddItemInput>
        </InputAndLabelDiv>
      ) : null}

      <InputAndLabelDiv>
        {props.modify ? (
          <AddButton onClick={handleItemModify}>modify</AddButton>
        ) : null}
        {props.add ? <AddButton onClick={handleItemAdd}>add</AddButton> : null}
        {props.search ? (
          <AddButton onClick={e => handleItemSearch(props.fn)}>search</AddButton>
        ) : null}
      </InputAndLabelDiv>
    </AddItemWrapper>
  );
};

export default AddItem;
