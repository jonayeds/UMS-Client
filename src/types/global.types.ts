import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
    errorSource?:{path:string, message:string}[]
  };
  status: number;
};

export type TMeta = {
  totalPage: number;
  page: number;
};

export type TResponse<T> = {
  data?: T ;
  error?: TError;
  meta?: TMeta;
};

export type TQueryParams ={ name: string; value: string }

export type TReduxResponse<T> = TResponse<T> & BaseQueryApi;
