import React from 'react'
import styled from 'styled-components';

const OrderComponent = ({text1,text2}) => {
  return (
    <OrderDIV>
      <StyledH4>{text1}</StyledH4>
      <StyledH3>{text2}</StyledH3>
    </OrderDIV>
  );
}

export default OrderComponent;

const OrderDIV = styled.div`
  margin: 10px;
  padding: 25px 30px;
  border-right: 1px solid #a3a3a3;

  &:last-child {
    border-right: none;
  }
`;

const StyledH3 = styled.h3`
  color: #565962;
  font-weight: bolder;
  font-size: 19px;
`;

const StyledH4 = styled.h4`
  color: #a3a3a3;
`;