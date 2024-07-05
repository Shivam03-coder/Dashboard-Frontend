import { apiService } from "../middleware/apimiddleware";

export const userApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "Get",
      }),
      providesTags: ["Movies"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
