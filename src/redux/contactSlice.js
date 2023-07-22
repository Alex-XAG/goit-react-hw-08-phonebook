import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://64b2480c38e74e386d54e8f5.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    removeContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: newContact.name,
          phone: newContact.phone,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useRemoveContactMutation,
  useAddContactMutation,
} = contactsApi;

///////////////////////////////////////////////////////////////////////////////////

// import { createSlice } from '@reduxjs/toolkit';

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//   },
//   reducers: {
//     addContact(state, action) {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     },
//     removeContact(state, action) {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           product => product.id !== action.payload
//         ),
//       };
//     },
//     // handleSearchChange(state, action) {
//     //   return state.filter(contact =>
//     //     contact.name.toLowerCase().includes(action.payload.toLowerCase())
//     //   );
//     // },
//   },
// });

// export const { addContact, removeContact, handleSearchChange } =
//   contactSlice.actions;
