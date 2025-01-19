import { z } from "zod";
import { months } from "../constants/global";

export const academicSemesterSchema = z.object({
    code:z.string({required_error:"This field is required"}),
    startMonth:z.enum(months as [string, ...string[]], {required_error:"Start month is required"}),
    endMonth:z.enum(months as [string, ...string[]], {required_error:"End month is required"}),
    year:z.string({required_error:"Year is required"})
  })

  export const academicFacultySchema = z.object({
    name:z.string({required_error:"Name is required"})
  })

  export const academicDepartmentSchema = z.object({
    name:z.string({required_error:"Name is required"}),
    academicFaculty:z.string({required_error:"Academic Faculty is required"})
  })