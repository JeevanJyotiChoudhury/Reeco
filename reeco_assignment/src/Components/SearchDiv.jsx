import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";
import styled from "styled-components";

const SearchDiv = () => {
  return (
    <MainDIV>
      <Search>
        <p>Search...</p>
              <IoIosSearch size={ "20px"} />
      </Search>
      <PrinterDiv>
        <OutlineBtn>Add item</OutlineBtn>
        <FiPrinter color={"rgb(30, 99, 63)"} size={"30px"} />
      </PrinterDiv>
    </MainDIV>
  );
};

export default SearchDiv;

const MainDIV = styled.div`
  display: flex;
  justify-content: space-between;
  padding:25px 35px;
`;

const Search = styled.div`
  border: 1px solid gray;
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 10px;
  border-radius: 20px;
`;

const PrinterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:13%;
`;

const OutlineBtn = styled.button`
  font-weight: bolder;
  border-radius: 20px;
  padding: 10px 15px;
  background-color: white;
  color: rgb(30, 99, 63);
  border-color: rgb(30, 99, 63);
`;
