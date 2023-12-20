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
            state.posts = []
        }
    },
    extraReducers: {}
});

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;