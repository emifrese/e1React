import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modalOpen: false,
  modalType: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: INITIAL_STATE,
  reducers: {
    toggleModal: (state, action) => {
      const { modalType } = action.payload;
      return { ...state, modalOpen: !state.modalOpen, modalType };
    },
  },
});


export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;