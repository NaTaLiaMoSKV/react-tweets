import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { fetchMoreUsers, fetchAllUsers, fetchUsersByFilter } from "./operations";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        length: 0,
        filter: 'all',
        isEnd: false,
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchMoreUsers.pending](state) {
            state.isLoading = true;
        },
        [fetchMoreUsers.fulfilled](state, action) {
            const currentPage = action.payload.page;
            state.length += currentPage;
            state.usersList.push(...action.payload.data);
            console.log(state.usersList);

            if (state.length < 15) state.isEnd = false;
            else state.isEnd = true;
            state.filter = 'all';
            state.isLoading = false;
            state.error = null;
        },
        [fetchMoreUsers.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload.data;
        },

        [fetchAllUsers.pending](state) {
            state.isLoading = true;
        },
        [fetchAllUsers.fulfilled](state, action) {
            console.log('fetch All!')
            state.usersList = action.payload;
            console.log(state.usersList);
            state.isEnd = true;
            state.isLoading = false;
            state.error = null;
        },
        [fetchAllUsers.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [fetchUsersByFilter.pending](state) {
            state.isLoading = true;
        },
        [fetchUsersByFilter.fulfilled](state, action) {
            state.filter = action.payload.filter;
            state.usersList = action.payload.data;
            state.isEnd = true;
            
            if (state.filter === 'all') {
                const currentPage = action.payload.page;
                state.length += currentPage;

                if (state.length < 15) state.isEnd = false;
                else state.isEnd = true;
            }
            state.isLoading = false;
        },
        [fetchUsersByFilter.rejected](state) {
            state.isLoading = false;
        },
    }
})

const persistConfig = {
    key: 'users',
    storage,
    whitelist: ['usersList', 'filter'],
}

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);

// export const usersReducer = usersSlice.reducer;