import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../components/utils/apis";

export const GetLayout= createAsyncThunk("/layout",async()=>{
    const response = await axios.get(`${baseurl}/settings`);
    const data = await response.data;
    return data
})

const layoutSlice = createSlice({
    initialState:{info:null,isLoading:false,isError:false},
    name:"layouts",
    extraReducers:(builder)=>{
        builder.addCase(GetLayout.pending,(state)=>{
            state.isLoading=true
        })
         builder.addCase(GetLayout.fulfilled,(state,action)=>{
            state.info=action.payload
            state.isLoading=false
        })
         builder.addCase(GetLayout.rejected,(state)=>{
            state.isError= true
            state.isLoading=false
        })
    }
})


const Layout= layoutSlice.reducer;
export default Layout