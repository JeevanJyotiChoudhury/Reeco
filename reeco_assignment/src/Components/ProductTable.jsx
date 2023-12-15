import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoCheck } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import Avocado from "../Asset/Avocado Hass.jpg";
import {
  approveProduct,
  confirmProduct,
  fetchProductsSuccess,
  markMissing,
  markUrgentMissing,
} from "../Redux/action";

const ProductTable = () => {
  const products = useSelector((state) => state.products);
  const approvedIndices = useSelector((state) => state.approvedIndices);
  const confirmationIndex = useSelector((state) => state.confirmationIndex);
  const missing = useSelector((state) => state.missing);
  const urgentMissing = useSelector((state) => state.urgentMissing);
  const dispatch = useDispatch();

  useEffect(() => {
    const productData = async () => {
      try {
        const response = await fetch(
          "https://json-deploy-53u2.onrender.com/products"
        );
        const data = await response.json();
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    productData();
  }, [dispatch]);

  const handleApprove = (index) => {
    dispatch(approveProduct(index));
  };

  const handleConfirmation = (index) => {
    dispatch(confirmProduct(index));
  };

  const handleMissing = (index) => {
    dispatch(markMissing(index));
  };

  const handleUrgentMissing = (index) => {
    dispatch(markUrgentMissing(index));
  };

  const closeConfirmationModal = () => {
    dispatch({ type: "CONFIRM_PRODUCT", payload: null });
  };

  return (
    <MainDIV>
      <Table>
        <thead>
          <tr>
            <TH></TH>
            <TH>Product name</TH>
            <TH>Brand</TH>
            <TH>Price</TH>
            <TH>Quantity</TH>
            <TH>Total</TH>
            <TH>Status</TH>
            <TH></TH>
          </tr>
        </thead>
        <tbody>
          {products?.map((elem, index) => {
            const isApproved = approvedIndices.includes(index);
            const isMissing = missing.includes(index);
            const isUrgentMissing = urgentMissing.includes(index);

            return (
              <tr key={index}>
                <TD>
                  <img
                    src={Avocado}
                    alt="Avocardo"
                    width="30px"
                    height="30px"
                  />
                </TD>
                <TD>{elem.name}</TD>
                <TD>{elem.brand}</TD>
                <TD>{elem.price}</TD>
                <TD>{elem.quantity}</TD>
                <TD>{elem.total}</TD>
                <TD>
                  {isApproved ? (
                    <APPROVED>Approved</APPROVED>
                  ) : isMissing ? (
                    <MISSING>Missing</MISSING>
                  ) : isUrgentMissing ? (
                    <URGENTMISSING>Urgent missing</URGENTMISSING>
                  ) : (
                    ""
                  )}
                </TD>
                <TD>
                  <Button onClick={() => handleApprove(index)}>
                    <GoCheck
                      style={{ color: isApproved ? "green" : "black" }}
                    />
                  </Button>
                  <Button>
                    <RxCross2
                      style={{
                        color: isMissing
                          ? "orange"
                          : isUrgentMissing
                          ? "red"
                          : "black",
                      }}
                      onClick={() => handleConfirmation(index)}
                    />
                  </Button>
                  <Button>Edit</Button>
                </TD>

                {confirmationIndex === index && (
                  <ConfirmationModal>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "5px auto 10px",
                      }}
                    >
                      <h2>Missing Product</h2>
                      <RxCross2 onClick={closeConfirmationModal} />
                    </div>
                    <p>Is {elem.name} is UEGENT......?</p>
                    <div
                      style={{
                        position: "absolute",
                        right: "20px",
                        bottom: "30px",
                        width: "40%",
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button onClick={() => handleMissing(index)}>No</Button>
                      <Button onClick={() => handleUrgentMissing(index)}>
                        Yes
                      </Button>
                    </div>
                  </ConfirmationModal>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </MainDIV>
  );
};

export default ProductTable;

const MainDIV = styled.div`
  margin: 20px auto 0;
  width: 95%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TD = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  &:last-child {
    text-align: right;
    background-color: rgb(249, 249, 249);
  }
  &:first-child {
    width: 4%;
  }
  &:nth-child(2) {
    width: 25%;
  }
  &:nth-child(3) {
    width: 10%;
  }
  &:nth-child(4) {
    width: 10%;
  }
  &:nth-child(5) {
    width: 10%;
  }
  &:nth-child(7) {
    background-color: rgb(249, 249, 249);
  }
`;

const TH = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-weight: bold;
`;

const ConfirmationModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 200px;
  width: 300px;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 15px;
`;

const APPROVED = styled.button`
  border: none;
  background-color: green;
  padding: 10px 15px;
  color: white;
  border-radius: 20px;
`;
const MISSING = styled.button`
  border: none;
  background-color: orange;
  padding: 10px 15px;
  color: white;
  border-radius: 20px;
`;
const URGENTMISSING = styled.button`
  border: none;
  background-color: red;
  padding: 10px 15px;
  color: white;
  border-radius: 20px;
`;
