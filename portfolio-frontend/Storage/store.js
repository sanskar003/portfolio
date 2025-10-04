import { configureStore } from "@reduxjs/toolkit"
import contactReducer from "../Slices/contactSlice"

export const store = configureStore({
    reducer: {
        contact: contactReducer,
     }
})