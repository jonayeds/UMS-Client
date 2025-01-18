import { TReduxResponse} from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        args?.forEach((element:{name:string, value:string}) => {
          params.append(element.name, element.value)
        });
       return {
        url: "/academic-semester",
        params
      }},
      transformResponse: (response:TReduxResponse<TAcademicSemester[]>) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semester/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    addAcademicFaculty: builder.mutation({
      query:(data)=>({
        url:"/academic-faculty/create-academic-faculty",
        method:"POST",
        body:data
      })
    })
  }),
});

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation, useAddAcademicFacultyMutation } =
  academicManagementApi;
