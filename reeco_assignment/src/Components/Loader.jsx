import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="loader">
        <h1>Loading....</h1>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;


const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;