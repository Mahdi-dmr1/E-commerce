import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://e-commerce-latest-khaki.vercel.app/allProducts/" }),
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => `allProducts`,
		}),
		getProduct: builder.query({
			query: (id) => `allProducts/${id}`,
		}),
	}),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productApi;
