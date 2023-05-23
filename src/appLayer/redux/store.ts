'use client';

import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '@/entities/theme/model/slice';

const preloadedState = {
  theme: {
    orderFormat:
      typeof window !== 'undefined' ? localStorage.getItem('app-order-format') || 'chat' : 'chat',
  },
};

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
