import React from "react";
import styled from "styled-components";
import OrderComponent from "./OrderComponent";
import { IoFastFoodOutline } from "react-icons/io5";

const OrderSummary = () => {
  return (
    <MainDIV>
      <OrderComponent
        text1={"Suppliers"}
        text2={"East coast fruits & vegetables"}
      />
      <OrderComponent text1={"Shipping date"} text2={"Thu, Feb 10"} />
      <OrderComponent text1={"Total"} text2={"$ 15,028.3"} />
      <OrderDIV>
        <StyledH4>Category</StyledH4>
        <IconDiv>
          <IoFastFoodOutline />
          <IoFastFoodOutline />
          <IoFastFoodOutline />
          <IoFastFoodOutline />
          <IoFastFoodOutline />
          <IoFastFoodOutline />
          <IoFastFoodOutline />
          <IoFastFoodOutline />
        </IconDiv>
      </OrderDIV>
      <OrderComponent text1={"Department"} text2={"300-444-678"} />
      <OrderComponent text1={"Status"} text2={"Awaiting your approvel"} />
    </MainDIV>
  );
};

export default OrderSummary;

const MainDIV = styled.div`
  border: 1px solid;
  border-radius: 10px;
  width: 85%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: white;
`;
const OrderDIV = styled.div`
  margin: 10px;
  padding: 25px 30px;
  border-right: 1px solid #a3a3a3;

  &:last-child {
    border-right: none;
  }
`;

const StyledH4 = styled.h4`
  color: #a3a3a3;
`;

const IconDiv = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap:10px 5px;
margin-top:5px;
`;


