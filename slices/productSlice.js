import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	items: [],
	status: null,
};

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		try {
			const response = await axios.get("http://localhost:9000/allProducts");
			return response.data;
		} catch (err) {
			console.log(err);
		}
	}
);

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending]: (state, action) => {
			state.status = "pending";
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = "success";
		},
		[fetchProducts.rejected]: (state, action) => {
			state.status = "rejected";
		},
	},
});

export default productSlice.reducer;
