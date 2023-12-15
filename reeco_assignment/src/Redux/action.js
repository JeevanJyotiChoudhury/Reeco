import {
  APPROVE_PRODUCT,
  CONFIRM_PRODUCT,
  MARK_MISSING,
  MARK_URGENT_MISSING,
} from "./actionTypes";

export const approveProduct = (index) => ({
  type: APPROVE_PRODUCT,
  payload: index,
});

export const confirmProduct = (index) => ({
  type: CONFIRM_PRODUCT,
  payload: index,
});

export const markMissing = (index) => ({
  type: MARK_MISSING,
  payload: index,
});

export const markUrgentMissing = (index) => ({
  type: MARK_URGENT_MISSING,
  payload: index,
});

