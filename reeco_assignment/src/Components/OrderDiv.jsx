import React from "react";
import styled from "styled-components";
import { GoChevronRight } from "react-icons/go";

const OrderDiv = () => {
  return (
    <MAINDIV>
      <Div>
        <TDiv>
          <p>Orders</p>
          <GoChevronRight />
          <p>Order 32457ABC</p>
        </TDiv>
        <BDiv>
          <BoldDiv>Order 32457ABC</BoldDiv>
          <ButtonDiv>
            <OutlineBtn>Back</OutlineBtn>
            <SolidBtn>Approve order</SolidBtn>
          </ButtonDiv>
        </BDiv>
      </Div>
    </MAINDIV>
  );
};

export default OrderDiv;

const MAINDIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.10) 0px 10px 20px, rgba(0, 0, 0, 0.10) 0px 6px 6px;
`;

const Div = styled.div`
  /* border: 1px solid pink; */
  width: 85%;
  margin: auto;
`;

const TDiv = styled.div`
  /* border: 1px solid; */
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const BDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;
`;

const BoldDiv = styled.h2`
  font-weight: bolder;
`;

const ButtonDiv = styled.div`
  width: 16%;
  display: flex;
  justify-content: space-between;
`;

const OutlineBtn = styled.button`
  font-weight: bolder;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: white;
  color: rgb(30, 99, 63);
  border-color: rgb(30, 99, 63);
`;

const SolidBtn = styled.button`
  font-weight: bolder;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: rgb(30, 99, 63);
  color: white;
  border: none;
`;
