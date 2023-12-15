import {
  APPROVE_PRODUCT,
  CONFIRM_PRODUCT,
  FETCH_PRODUCTS_SUCCESS,
  MARK_MISSING,
  MARK_URGENT_MISSING,
} from "./actionTypes";

const initialState = {
  approvedIndices: [],
  confirmationIndex: null,
  missing: [],
  urgentMissing: [],
  products: [],
  productsLength: 0,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE_PRODUCT:
      return {
        ...state,
        approvedIndices: [...state.approvedIndices, action.payload],
      };
    case CONFIRM_PRODUCT:
      return { ...state, confirmationIndex: action.payload };
    case MARK_MISSING:
      return {
        ...state,
        missing: [...state.missing, action.payload],
        confirmationIndex: null,
      };
    case MARK_URGENT_MISSING:
      return {
        ...state,
        urgentMissing: [...state.urgentMissing, action.payload],
        confirmationIndex: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        productsLength: action.payload.length,
      };
    case "SAVE_EDITED_PRODUCT": {
      const { index, name, price, quantity } = action.payload;
      const updatedProducts = [...state.products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        name,
        price,
        quantity,
      };

      return {
        ...state,
        products: updatedProducts,
      };
    }
    default:
      return state;
  }
};
