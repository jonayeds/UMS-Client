/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex } from "antd"
import UMSForm from "../../../components/form/UMSForm"
import UMSSelect from "../../../components/form/UMSSelect"
import { useAddAcademicDepartmentMutation, useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api"
import UMSInput from "../../../components/form/UMSInput"
import { FieldValues, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { academicDepartmentSchema } from "../../../schemas/academicManagement.schema"
import { toast } from "sonner"

const CreateAcademicDepartment = () => {
  const {data:academicFaculty} = useGetAllAcademicFacultyQuery(undefined)
  const academicFacultyOptions = academicFaculty?.data?.map(item=> ( {value:item._id, label:item.name} ))
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation()
  const onSubmit: SubmitHandler<FieldValues> = async(data)=>{
    const toastId = toast.loading("Adding Academic Department")
    try {
      const res = await addAcademicDepartment(data)
      console.log("res", res)
      if(res?.data) toast.success("successfully added Academic Department", {id:toastId})
      else if(res?.error) toast.error((res.error as any).data?.errorSource?.[0].message,{id:toastId} )
    } catch (error) {
      toast.error("Something went wrong",{id:toastId})
    }
  }
  return (
    <Flex justify="center" >
      <Col span={8}>
        <UMSForm onSubmit={onSubmit} resolver={zodResolver(academicDepartmentSchema)} >
            <UMSSelect name="academicFaculty" label="Academic Faculty" options={academicFacultyOptions || [] } />
            <UMSInput name="name" type="text" label="Name"/>
            <Button htmlType="submit">Submit</Button>
        </UMSForm>
      </Col>
    </Flex>
  )
}

export default CreateAcademicDepartment