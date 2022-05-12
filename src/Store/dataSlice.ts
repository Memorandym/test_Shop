import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import StatsItem from "../Components/StatsItem";
import React from "react";

interface phone {
    [key: string]: string | boolean
}

type phoneState = {
    list: phone[];
}

const initialState: phoneState={
    list:[],
}

const dataSlice = createSlice({
    name:'phones',
    initialState,
    reducers:{
        addPhone(state,action: PayloadAction<any>){
            const p:phone = {};
            Object.keys(action.payload).map(
                (el) =>
                {
                    p[`${el}`] = action.payload[el]
                }
            )
            state.list.push(p)
        },
        clearPhone(state,action:PayloadAction<any>){
            state.list=[];
        }
    }
})

export const {addPhone} = dataSlice.actions
export default dataSlice.reducer