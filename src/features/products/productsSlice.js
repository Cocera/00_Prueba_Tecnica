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
        // OPTIONAL?
        reset: (state) => {
            state.products = [];
        }
    },
});

export default productsSlice.reducer;