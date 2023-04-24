import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, fetchFirst } from "./operations";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        length: 0,
        isEnd: false,
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchFirst.pending](state) {
            state.isLoading = true;
        },
        [fetchFirst.fulfilled](state, action) {
            state.usersList = action.payload.data;
            const currentPage = action.payload.page;
            state.length += currentPage;
            state.usersList = action.payload.data;

            if (state.length < 15) state.isEnd = true;
            else state.isEnd = false;

            state.isLoading = false;
            state.error = null;
        },
        [fetchFirst.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload.data;
        },
        [fetchUsers.pending](state) {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled](state, action) {
            const currentPage = action.payload.page;
            state.length += currentPage;
            state.usersList.push(...action.payload.data);

            if (state.length < 15) state.isEnd = true;
            else state.isEnd = false;

            state.isLoading = false;
            state.error = null;
        },
        [fetchUsers.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload.data;
        },
    }
})

export const usersReducer = usersSlice.reducer;