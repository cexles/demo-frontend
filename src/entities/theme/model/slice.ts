import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderFormatType } from '@/entities/theme/model/type';

interface ThemeSliceState {
  orderFormat: OrderFormatType;
}

const initialState: ThemeSliceState = {
  orderFormat: 'chat',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeOrderFormat: (state, action: PayloadAction<OrderFormatType>) => {
      localStorage.setItem('app-order-format', action.payload);
      // eslint-disable-next-line no-param-reassign
      state.orderFormat = action.payload;
    },
  },
});

export const { changeOrderFormat } = themeSlice.actions;

export default themeSlice.reducer;
