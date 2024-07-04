import { apiSlice } from "../middleware/apimiddleware";

export const userapiQuery = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = userapiQuery;
