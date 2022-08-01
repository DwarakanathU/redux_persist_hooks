import { userActionTypes } from "./userActionTypes,";

export const userSetDetails = (user) => ({
  type: userActionTypes.USER_SET_DETAILS,
  payload: user,
});
