import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { JwtPayload } from "jwt-decode";

export interface TUser extends JwtPayload  {
    id:string;
    role:"admin"| "student" | "faculty";
}

type TAuthState = {
    user:null| TUser;
    token:null| string;
}

const initialState:TAuthState = {
    user:null,
    token:null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state, action:PayloadAction<TAuthState>)=>{
            const {user, token} = action.payload;
            state.user = user;
            state.token = token
        },
        logOut :(state)=>{
            state.user = null;
            state.token = null;
        }
    }
})

export const {setUser, logOut} = authSlice.actions

export default authSlice.reducer

export const useCurrentToken = (state: RootState )=>state.auth.token
export const useCurrentUser = (state: RootState )=>state.auth.user