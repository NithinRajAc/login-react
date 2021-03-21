/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice=createSlice(
    {
        name:'login',
        initialState:'',
        reducers:{
            saveUserName:(state,action)=>{
                return action.payload
            }
        }
    }
)