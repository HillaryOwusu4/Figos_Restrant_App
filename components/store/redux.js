
import { createWrapper } from "next-redux-wrapper";

import { createSlice, configureStore, current, createAsyncThunk } from '@reduxjs/toolkit'
import CartFeature from "./CartFeature";
import ProductsFeature from "./ProductsFeature";

export const store = configureStore({
    reducer: {
        Products: ProductsFeature,
        Cart: CartFeature
    }
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
