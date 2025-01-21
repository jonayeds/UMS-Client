import { IStudent, TQueryParams, TReduxResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllStudents: builder.query({
            query:(args)=>{
                const params = new URLSearchParams()
                args.forEach((item:TQueryParams) => params.append(item.name, item.value))
               return {
                url:"/student/",
                method:"GET",
                params,
            }},
            transformResponse:(response: TReduxResponse<IStudent[]>)=>{
                console.log("Original",response)
                return {
                    data:response?.data,
                    meta:response.meta,
                }
            }
        }),

        addStudent: builder.mutation({
            query:(data)=>{
                return {
                    url:"/user/create-student",
                    method:"POST",
                    body:data
                }
            }
        })
    })
})

export const {
    useAddStudentMutation,
    useGetAllStudentsQuery
} = userManagementApi