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
    getCustomer: builder.query({
      query: () => ({
        url: "/client/customer",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["Customers"],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize, search }) => ({
        url: "/client/transcations",
        method: "GET",
        params: { page, pageSize, search },
      }),
      transformResponse: (response) => response.data,
      providesTags: ["Transcations"],
    }),
    getSalesOverview: builder.query({
      query: () => ({
        url: "/sales/overview",
        method: "GET",
      }),
      transformResponse: (response) => response.data?.overAllstats,
      providesTags: ["Users"],
    }),
    getAdmins: builder.query({
      query: () => ({
        url: "/appadmins/admins",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomerQuery,
  useGetTransactionsQuery,
  useGetSalesOverviewQuery,
  useGetAdminsQuery,
} = userApi;
