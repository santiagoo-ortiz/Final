import { createSlice } from "@reduxjs/toolkit";

export const purchaseSlice = createSlice({
    name: "purchase",
    initialState: [],
    reducers: {
        setPurchase: (state, action) => { action.payload }
      
    } 
})

export const { setPurchase } = purchaseSlice.actions

export default purchaseSlice.reducer

 