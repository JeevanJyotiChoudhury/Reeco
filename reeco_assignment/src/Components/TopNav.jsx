import React from "react";
import styled from "styled-components";
import { TfiShoppingCart } from "react-icons/tfi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";

const TopNav = () => {
  const productsLength = useSelector((state) => state.productsLength);

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
          <CartContainer>
            <ProductsCount>{productsLength}</ProductsCount>
            <TfiShoppingCart />
          </CartContainer>
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
  height: 60px;
  display: flex;
  align-items: center;
`;

const Div = styled.div`
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

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ProductsCount = styled.span`
  color: white;
  font-weight: bolder;
  margin-right: 5px;
  position: absolute;
  top: -8px;
  left: -5px;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: lightgreen;
`;

const NDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
