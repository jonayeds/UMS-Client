import { FieldValues, SubmitHandler } from "react-hook-form"
import UMSForm from "../../../components/form/UMSForm"
import UMSInput from "../../../components/form/UMSInput"
import { Button, Col, Flex } from "antd"
import UMSSelect from "../../../components/form/UMSSelect"

const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues>= (data) =>{
        console.log(data)
    }
  return (
    <Flex justify="center" align="center">
        <Col span={6} >
        <UMSForm onSubmit={onSubmit}>
        <UMSSelect label="Semester Name"/>
        <UMSInput type="text" name="year" label="Year"/>
        <Button htmlType="submit" >Submit</Button>
    </UMSForm>
    </Col>
    </Flex>
  )
}

export default CreateAcademicSemester