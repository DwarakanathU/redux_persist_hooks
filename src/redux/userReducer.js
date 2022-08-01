import { userActionTypes } from "./userActionTypes,";
const INITAIL_STATE = {
  details: null,
};
export const userReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.USER_SET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};
