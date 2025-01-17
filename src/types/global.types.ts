import { BaseQueryApi } from "@reduxjs/toolkit/query";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TError = {
    data:{
        message:string,
        stack:string,
        success:boolean
    }
    status:number,
}

export type TMeta = {
    totalPage:number;
    page:number;
}

export type TResponse<T> = {
    data?:T;
    error?:TError;
    meta?:TMeta;
}

export type TReduxResponse<T> = TResponse<T> & BaseQueryApi