import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY =
  "live_clOX4ws4ocUXPYkSOIerB1Q3qHP2oWq2iCnVV7IfCBTe8422KnBIcsESLkkRwTte";
const API_URL = "https://api.thecatapi.com/v1";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,

    prepareHeaders: (headers) => {
      headers.set("x-api-key", API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});
