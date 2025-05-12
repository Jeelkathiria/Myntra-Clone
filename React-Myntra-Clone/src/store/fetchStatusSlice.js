import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: "items",
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true; // Mutate the state directly
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true; // Mutate the state directly
        },
        markFetchingFinished: (state) => {
            state.currentlyFetching = false; // Mutate the state directly
        },
    },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;