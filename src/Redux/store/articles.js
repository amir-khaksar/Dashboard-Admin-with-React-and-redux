import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
    "articles/getArticlesFromServer",
    async (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
    }
)

const slice = createSlice({
    name: "articles",
    initialState : [],
    reducers: {},

    extraReducers: builder => {
        builder.addCase(getArticlesFromServer.fulfilled, (state, action) => action.payload)
    }
})

export default slice.reducer