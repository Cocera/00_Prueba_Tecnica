import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
    products: []
};

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        try {
            return await productsService.getProducts();
        } catch (error) {
            console.error(error);
        }
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        reset: (state) => {
            state.products = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                // console.log('Fulfilled', action.payload);
                return {
                    ...state,
                    loading: false,
                    products: action.payload,
                };
            })
            .addCase(getProducts.rejected, (state, action) => {
                // console.log('Rejected', action.error);
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                };
            });
    }
});

export default productsSlice.reducer;