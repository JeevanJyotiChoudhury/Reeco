import React from "react";
import styled from "styled-components";
import OrderComponent from "./OrderComponent";

const OrderSummary = () => {
  return (
    <MainDIV>
      <OrderComponent text1={"Suppliers"}text2={"East coast fruits & vegetables"}/>
      <OrderComponent text1={"Shipping date"} text2={"Thu, Feb 10"} />
      <OrderComponent text1={"Total"} text2={"$ 15,028.3"} />
      <OrderComponent text1={"Category"} text2={"Department Department"} />
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


