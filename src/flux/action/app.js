import { actionTypes } from "./actionType.js";
const {
  CHANGE_LABEL
} = actionTypes;

const changeLabelAction = () => {
  return {
    type: CHANGE_LABEL,
    testLabel:"change label"
  }
}
export {
  changeLabelAction
}