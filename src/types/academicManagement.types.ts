export type TAcademicSemester = {
    _id:string;
    year:string;
    name:string;
    startMonth:string;
    endMonth:string;
}

export type TAcademicFaculty = {
    _id:string;
    name:string
}

export type TAcademicDepartment = {
    data:{
        _id:string;
    name:string;
    academicFaculty:TAcademicFaculty;
    }[]
}