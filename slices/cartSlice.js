"use client";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
	cartTotalAmount: 0,
	cartQty: 0,
});

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		populateCart(state, action) {
			if (
				sessionStorage.getItem("cartItems") &&
				typeof window !== "undefined"
			) {
				console.log(sessionStorage.getItem("cartItems"));
				cartAdapter.setAll(
					state,
					JSON.parse(sessionStorage.getItem("cartItems"))
				);
			}
		},
		addToCart(state, action) {
			if (typeof window !== "undefined") {
				const productExist = state.entities[action.payload.id];

				if (productExist) {
					state.entities[action.payload.id].cartQty += 1;
				} else {
					cartAdapter.addOne(state, action.payload);
					toast.success("محصول به سبد خرید اضافه شد", {
						position: "bottom-right",
					});
				}
				sessionStorage.setItem("cartItems", JSON.stringify(state.entities));
			}
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
			if (typeof window !== "undefined") {
				const product = state.entities[action.payload.id];

				if (product.cartQty > 1) {
					product.cartQty -= 1;
				} else if (product.cartQty === 1) {
					cartAdapter.removeOne(state, action.payload.id);
				}
				sessionStorage.setItem("cartItems", JSON.stringify(state.entities));
			}
		},
		removeFromCart(state, action) {
			if (typeof window !== "undefined") {
				cartAdapter.removeOne(state, action.payload.id);
				sessionStorage.setItem("cartItems", JSON.stringify(state.entities));

				toast.error("محصول از سبد خرید حذف شد", {
					position: "bottom-left",
				});
			}
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
