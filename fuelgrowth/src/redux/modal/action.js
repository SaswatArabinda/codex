import { SHOW_MODAL, HIDE_MODAL } from "./actionTypes";

export const showModal = ({ name, data }) => ({
  type: SHOW_MODAL,
  data: { name, data },
});

export const hideModal = ({ name, data = {} }) => ({
  type: HIDE_MODAL,
  data: { name, data },
});
