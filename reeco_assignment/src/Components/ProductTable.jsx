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
  saveEditedProduct,
} from "../Redux/action";
import { EditModal } from "./EditModal";
import Loader from "./Loader";

const ProductTable = () => {
  const products = useSelector((state) => state.products);
  const approvedIndices = useSelector((state) => state.approvedIndices);
  const confirmationIndex = useSelector((state) => state.confirmationIndex);
  const missing = useSelector((state) => state.missing);
  const urgentMissing = useSelector((state) => state.urgentMissing);
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedValues, setEditedValues] = useState({
    index: null,
    name: "",
    price: 0,
    quantity: 0,
  });
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isSave, setIsSave] = useState({});


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
      } finally {
        setLoading(false);
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

  const openEditModal = (index, name, price, quantity) => {
    setEditedValues({ index, name, price, quantity });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditedValues({ index: null, name: "", price: 0, quantity: 0 });
  };

  const saveEdit = (index) => {
    dispatch(saveEditedProduct(editedValues));
    setIsSave((prevIsSave) => ({ ...prevIsSave, [index]: true }));
    closeEditModal();
  };
  const handleOptionSelection = (index, reason) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [index]: reason,
    }));
  };

  return (
    <MainDIV>
      {loading ? (
        <Loader />
      ) : (
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
                  <TD>${elem.price} / 6*1LB</TD>
                  <TD>{elem.quantity} x 6 + 1LB</TD>
                  <TD>${(elem.price * elem.quantity).toFixed(2)}</TD>
                  <TD>
                    {isApproved ? (
                      <APPROVED>Approved</APPROVED>
                    ) : isMissing ? (
                      <MISSING>Missing</MISSING>
                    ) : isUrgentMissing ? (
                      <URGENTMISSING>Urgent missing</URGENTMISSING>
                    ) : selectedOptions[index] && isSave[index] ? (
                      <EDITOPTION>{selectedOptions[index]}</EDITOPTION>
                    ) : (
                      ""
                    )}
                  </TD>
                  <TD>
                    <div className="buttons-container">
                      <Button onClick={() => handleApprove(index)}>
                        <GoCheck
                          size={"23px"}
                          style={{ color: isApproved ? "green" : "black" }}
                        />
                      </Button>
                      <Button>
                        <RxCross2
                          size={"23px"}
                          style={{
                            color:
                              isMissing && !isApproved
                                ? "orange"
                                : !isApproved && isUrgentMissing
                                ? "red"
                                : "black",
                          }}
                          onClick={() => handleConfirmation(index)}
                        />
                      </Button>
                      <Button
                        onClick={() =>
                          openEditModal(
                            index,
                            elem.name,
                            elem.price,
                            elem.quantity
                          )
                        }
                      >
                        Edit
                      </Button>
                    </div>
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
                        <RxCross2
                          onClick={closeConfirmationModal}
                          size={"25px"}
                        />
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
                  {isEditModalOpen && (
                    <EditModalDiv>
                      <EditModal
                        editedValues={editedValues}
                        setEditedValues={setEditedValues}
                        saveEdit={saveEdit}
                        closeEditModal={closeEditModal}
                        handleOptionSelection={(reason) =>
                          handleOptionSelection(editedValues.index, reason)
                        }
                        selectedOption={selectedOptions[editedValues.index]}
                      />
                    </EditModalDiv>
                  )}
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </MainDIV>
  );
};

export default ProductTable;

const EditModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 400px;
  width: 600px;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 15px;
`;
const MainDIV = styled.div`
  margin: 20px auto 0;
  width: 95%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TD = styled.td`
  position: relative;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

  &:last-child {
    text-align: right;
    width: 15%;
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

  .buttons-container {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
const EDITOPTION = styled.button`
  border: none;
  background-color: #b78d66;
  padding: 10px 15px;
  color: white;
  border-radius: 20px;
`;
