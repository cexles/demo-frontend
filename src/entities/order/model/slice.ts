import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderSliceState {
  baseToken: string;
  targetToken: string;
}

const initialState: OrderSliceState = {
  baseToken: '0xfdaf650e710cbb5801aa0a152cf4481f70147890',
  targetToken: '0x429c90f2a384dbd7a6113cc642296e914445d66e',
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeBaseToken: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.baseToken = action.payload;
    },
    changeTargetToken: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.targetToken = action.payload;
    },
  },
});

export const { changeBaseToken, changeTargetToken } = orderSlice.actions;

export default orderSlice.reducer;
