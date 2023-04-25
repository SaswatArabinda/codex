import { SHOW_MODAL, HIDE_MODAL } from "./actionTypes";
import { MODALS } from "../../constants/enums";

const initialState = {
  modals: { [MODALS.FEEDBACK_MODAL]: { isVisible: false, data: null } },
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      const { name: modalName, data: modalData } = action.data;

      return {
        modal: {
          ...state.modals,
          ...{ [modalName]: { isVisible: true, data: modalData } },
        },
      };
    }

    case HIDE_MODAL: {
      const { name: modalName, data: modalData } = action.data;

      return {
        modal: {
          ...state.modals,
          ...{ [modalName]: { isVisible: false, data: null } },
        },
      };
    }

    default:
      return state;
  }
};

export default modalReducer;
