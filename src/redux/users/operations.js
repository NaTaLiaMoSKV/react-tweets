import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64465d06ee791e1e29fd08ab.mockapi.io';

let page = 1;

export const fetchFirst = createAsyncThunk(
    'tweets/fetchFirst',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get('/users', {
                params: { page: 1, limit: 3 }
            });
            return { data: res.data, page: res.config.params.page };
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const fetchUsers = createAsyncThunk(
    'tweets/fetch',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get('/users', {
                params: { page: ++page, limit: 3 }
            });
            return { data: res.data, page: res.config.params.page };
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)