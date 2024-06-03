"use client";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useState } from "react";
import { toast } from "react-toastify";

const cartAdapter = createEntityAdapter();

const useSessionStorageGetItem = (name) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		setValue(sessionStorage.getItem(name));
	}, []);
	return value;
};
const useSessionStorageSetItem = (name, json) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		setValue(sessionStorage.setItem(name, json));
	}, []);

	return value;
};

const initialState = cartAdapter.getInitialState({
	cartTotalAmount: 0,
	cartQty: 0,
});

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		populateCart(state, action) {
			if (useSessionStorageGetItem("cartItems")) {
				cartAdapter.setAll(
					state,
					JSON.parse(useSessionStorageGetItem("cartItems"))
				);
			}
		},
		addToCart(state, action) {
			const productExist = state.entities[action.payload.id];

			if (productExist) {
				state.entities[action.payload.id].cartQty += 1;
			} else {
				cartAdapter.addOne(state, action.payload);
				toast.success("محصول به سبد خرید اضافه شد", {
					position: "bottom-right",
				});
			}
			useSessionStorageSetItem("cartItems", JSON.stringify(state.entities));
		},
		getTotals(state, action) {
			let { total, qty } = Object.values(state.entities).reduce(
				(cartTotal, cartItem) => {
					const { price, cartQty } = cartItem;
					const itemTotal = price * cartQty;

					cartTotal.total += itemTotal;
					cartTotal.qty += cartQty;

					return cartTotal;
				},
				{
					total: 0,
					qty: 0,
				}
			);
			state.cartTotalQty = qty;
			state.cartTotalAmount = total;
		},
		decreaseCart(state, action) {
			const product = state.entities[action.payload.id];

			if (product.cartQty > 1) {
				product.cartQty -= 1;
			} else if (product.cartQty === 1) {
				cartAdapter.removeOne(state, action.payload.id);
			}
			useSessionStorageSetItem("cartItems", JSON.stringify(state.entities));
		},
		removeFromCart(state, action) {
			cartAdapter.removeOne(state, action.payload.id);
			useSessionStorageSetItem("cartItems", JSON.stringify(state.entities));

			toast.error("محصول از سبد خرید حذف شد", {
				position: "bottom-left",
			});
		},
	},
});

export const { selectAll } = cartAdapter.getSelectors((state) => state.cart);

export const {
	populateCart,
	addToCart,
	getTotals,
	decreaseCart,
	removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
