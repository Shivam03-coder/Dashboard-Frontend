import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
});

export const apiService = createApi({
  reducerPath: "adminApi",
  baseQuery,
  tagTypes: ["Users", "Products", "Transcations", "Customers"],
  endpoints: (builder) => ({}),
});
