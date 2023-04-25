import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const actionsSlice = createSlice({
    name: 'actions',
    initialState: {
        followList: [],
    },
    reducers: {
        followUser(state, action) {
            state.followList.push(action.payload);
        },
        unfollowUser(state, action) {
            state.followList = state.followList.filter(item => item.id !== action.payload.id);
        },
    }
})

const persistConfig = {
    key: 'actions',
    storage,
}

export const actionsReducer = persistReducer(persistConfig, actionsSlice.reducer);

export const { followUser, unfollowUser } = actionsSlice.actions;

export const selectFollowList = state => state.actions.followList;