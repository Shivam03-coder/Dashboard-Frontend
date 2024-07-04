import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
});

export const apiSlice = createApi({
  reducerPath:"adminApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: () => ({}),
});
