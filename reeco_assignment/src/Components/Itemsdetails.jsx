import React from "react";
import SearchDiv from "./SearchDiv";
import styled from "styled-components";
import ProductTable from "./ProductTable";

const Itemsdetails = () => {
  return (
    <MainDiv>
      <SearchDiv />
      <ProductTable/>
    </MainDiv>
  );
};

export default Itemsdetails;

const MainDiv = styled.div`
  border: 1px solid #a3a3a3;
  width: 85%;
  margin: auto;
  border-radius: 10px;
  background-color: white;
`;
