import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PayloadAction } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    down: (state, action: PayloadAction<number>) => {
      state.value = state.value - action.payload;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
