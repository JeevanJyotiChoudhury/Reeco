import React from "react";
import OrderSummary from "./OrderSummary";
import Itemsdetails from "./Itemsdetails";
import styled from "styled-components";

const OrderDetails = () => {
  return (
    <BACKGROUND>
      <OrderSummary />
      <Itemsdetails />
    </BACKGROUND>
  );
};

export default OrderDetails;

const BACKGROUND = styled.div`
  background-color: #fbfbfb;
  margin-bottom: 80px;
`;
