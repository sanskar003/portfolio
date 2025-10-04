import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendContactForm } from "../APIs/contactApi";

export const submitContact = createAsyncThunk(
    "contact/submit", //Feacture name, Action 
    async (formData, thunkApi) => {
        try {
            const response = await sendContactForm(formData);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue("Something went wrong");
        }
    }
);

const initialState = {
    loading: false,
    success: null,
    error: null
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.success = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContact.pending, (state) => {
                state.loading = true;
                state.success = null;
                state.error = null;
            })

            .addCase(submitContact.fulfilled, (state, action) => {
                state.loading = false;
                state.success = action.payload.message;
            })

            .addCase(submitContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;