import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, deleteContact } from './operationsContact';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

////////////////////////////////////////////////
// import { createApi } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data = [], params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };
// // Define a service using a base URL and expected endpoints
// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://goit-task-manager.herokuapp.com/',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contact'],
//     }),
//     removeContact: builder.mutation({
//       query: contactId => ({
//         url: `contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     addContact: builder.mutation({
//       query: newContact => ({
//         url: 'contacts',
//         method: 'POST',
//         body: {
//           name: newContact.name,
//           phone: newContact.phone,
//         },
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const {
//   useGetContactsQuery,
//   useRemoveContactMutation,
//   useAddContactMutation,
// } = contactsApi;
