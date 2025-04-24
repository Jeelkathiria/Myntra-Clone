import {createSlice} from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
    name: "items",
    initialState :{
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers:{
        markFetchDone:(store) =>{
            return store;
        },
        markFetchingStated:(store) =>{
            return store;
        },
        markFetchingFinished:(store) =>{
            return store;
        }
    }
})

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice