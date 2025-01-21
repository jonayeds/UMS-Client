import { TAcademicDepartment, TAcademicSemester } from "./academicManagement.types"

export interface IStudent {
        _id:string
        name: IName
        id:string
        gender: string
        email: string
        contactNumber: string
        emergencyContact: string
        bloodGroup: string
        presentAddress: string
        permanentAddress: string
        guardian: IGuardian
        localGuardian: ILocalGuardian
        admissionSemester: TAcademicSemester
        academicDepartment: TAcademicDepartment
}
  
  export interface IName {
    firstName: string
    middleName?:string
    lastName: string
  }
  
  export interface IGuardian {
    fatherName: string
    fatherOccupation: string
    fatherContactNo: string
    motherName: string
    motherContactNo: string
    motherOccupation: string
  }
  
  export interface ILocalGuardian {
    name: string
    address: string
    occupation: string
    contactNo: string
  }
  