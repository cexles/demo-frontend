'use client';

import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@/entities/theme/model/slice';
import orderReducer from '@/entities/order/model/slice';

const preloadedState = {
  theme: {
    orderFormat:
      typeof window !== 'undefined' ? localStorage.getItem('app-order-format') || 'form' : 'form',
  },
  order: {
    baseToken: '0xfdaf650e710cbb5801aa0a152cf4481f70147890',
    targetToken: '0x429c90f2a384dbd7a6113cc642296e914445d66e',
  },
};

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    order: orderReducer,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
