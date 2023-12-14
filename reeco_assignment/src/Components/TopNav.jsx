import React from "react";
import styled from "styled-components";
import { TfiShoppingCart } from "react-icons/tfi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TopNav = () => {
  return (
    <MainDiv>
      <Div>
        <LDiv>
          <h2>Reeco</h2>
          <p>Store</p>
          <p>Orders</p>
          <p>Analytics</p>
        </LDiv>
        <RDiv>
          <TfiShoppingCart />
          <NDiv>
            <p>Hello, Jeevan</p>
            <MdOutlineKeyboardArrowDown />
          </NDiv>
        </RDiv>
      </Div>
    </MainDiv>
  );
};

export default TopNav;

const MainDiv = styled.div`
  background-color: rgb(30, 99, 63);
  color: white;
  height:60px;
  display:flex;
  align-items: center;
`;

const Div = styled.div`
  /* border: 1px solid pink; */
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const LDiv = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RDiv = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
