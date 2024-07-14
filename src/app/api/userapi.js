import { apiService } from "../middleware/apimiddleware";

export const userApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["Users"],
      transformResponse: (response) => response.data,
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/client/products",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery } = userApi;
