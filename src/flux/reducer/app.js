import {actionTypes} from "../action/actionType.js";
//import dState from "./defaultState";

const {CHANGE_LABEL} = actionTypes;

const defaultState = {
  testLabel:"initialize label"
};

const app = (state = defaultState, action) => {
  const {type, testLabel} = action;
  switch(type) {
    case CHANGE_LABEL:
      return  Object.assign({},state,{
        testLabel:testLabel
      });
    default:
      return {
        ...state
      };
  }
}
export default app;