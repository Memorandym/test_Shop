import {createSlice,PayloadAction} from "@reduxjs/toolkit";

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
        },
        changePhone(state,action:PayloadAction<any>){
            state.list[state.list.findIndex(el=>
                el.id==action.payload.old
            )] = action.payload.new
        },
    }
})

export const {addPhone,clearPhone,changePhone} = dataSlice.actions
export default dataSlice.reducer