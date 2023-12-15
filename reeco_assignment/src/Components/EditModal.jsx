import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import Avocado from "../Asset/Avocado Hass.jpg";


export const EditModal = ({
  editedValues,
  setEditedValues,
  saveEdit,
  closeEditModal,
}) => {
  return (
    <ModalWrapper>
      <TOPDIV>
        <p>{editedValues.name}</p>
        <RxCross2 onClick={closeEditModal} />
      </TOPDIV>
      <EditBody>
        <img src={Avocado} alt="Avocado" width={"35%"} />
        <InputBody>
          <INPUTDIV>
            <label htmlFor="">Name: </label>
            <input
              type="text"
              value={editedValues.name}
              onChange={(e) =>
                setEditedValues({ ...editedValues, name: e.target.value })
              }
            />
          </INPUTDIV>
          <INPUTDIV>
            <label htmlFor="">Price: </label>
            <input
              type="number"
              value={editedValues.price}
              onChange={(e) =>
                setEditedValues({
                  ...editedValues,
                  price: parseFloat(e.target.value) || 0,
                })
              }
            />
          </INPUTDIV>
          <INPUTDIV>
            <label htmlFor="">Quantity: </label>
            <input
              type="number"
              value={editedValues.quantity}
              onChange={(e) =>
                setEditedValues({
                  ...editedValues,
                  quantity: parseInt(e.target.value) || 0,
                })
              }
            />
          </INPUTDIV>
        </InputBody>
      </EditBody>
      <OPTIONS>
              <h3>Choose Reason(Optional)</h3>
              <div>
                  <OptionalBtn>Missing Product</OptionalBtn>
                  <OptionalBtn>Quantity is not the same</OptionalBtn>
                  <OptionalBtn>Price is not the same</OptionalBtn>
                  <OptionalBtn>Other</OptionalBtn>
              </div>
      </OPTIONS>

      <BottomDiv>
        <ButtonDiv1 onClick={closeEditModal}>Cancel</ButtonDiv1>
        <ButtonDiv2 onClick={saveEdit}>Save</ButtonDiv2>
      </BottomDiv>
    </ModalWrapper>
  );
};

const TOPDIV = styled.div`
  display: flex;
  justify-content: space-between;
`;

const INPUTDIV = styled.div`
  display: flex;
  justify-content: space-between;
  margin:20px 40px ;
`;

const InputBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const EditBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OPTIONS = styled.div`
  margin-top:20px;
`;
const BottomDiv = styled.div`
  position: absolute;
  right: 20px;
  bottom: 30px;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const ButtonDiv2 = styled.button`
  border: none;
  background: rgb(30, 99, 63);
  color: white;
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 20px;
`;
const OptionalBtn=styled.button`
  border: 1px solid gray;
  color: gray;
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 12px;
  background: none;
  margin: 20px 5px;
`;
const ButtonDiv1 = styled.button`
  border: 1px solid rgb(30, 99, 63);
  color: rgb(30, 99, 63);
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 20px;
  background: none;
`;
const ModalWrapper = styled.div`
  /* Your styling for the modal wrapper */
`;
