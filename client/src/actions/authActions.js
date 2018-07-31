import { TEST_DISPATCH } from "./types";

//REGISTER USER
export const registeruser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
