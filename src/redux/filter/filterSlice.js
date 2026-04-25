import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
     name: "filter",

     initialState: "All",

     reducers: {
          changeFilter: {
             reducer(state, action) {
                    return state = action.payload
             },

             prepare(text) {
                    console.log(text)
                    return {
                        payload: text
                    }
             }
          }
     }
})

export const {changeFilter} = filterSlice.actions

export const filterReducer = filterSlice.reducer