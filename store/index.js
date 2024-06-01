import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer, { fetchProducts } from "../slices/productSlice";
import { productApi } from "@/slices/productApi";
import cartReducer, { getTotals, populateCart } from "@/slices/cartSlice";

export const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productApi.middleware),
});

// store.dispatch(fetchProducts());

store.dispatch(productApi.endpoints.getAllProducts.initiate());

store.dispatch(populateCart());
store.dispatch(getTotals());
