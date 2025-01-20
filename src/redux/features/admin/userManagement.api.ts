import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllStudents: builder.query({
            query:()=>({
                url:"/student/",
                method:"GET"
            })
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