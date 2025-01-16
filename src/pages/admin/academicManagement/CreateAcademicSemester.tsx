import { FieldValues, SubmitHandler } from "react-hook-form"
import UMSForm from "../../../components/form/UMSForm"
import UMSInput from "../../../components/form/UMSInput"
import { Button, Col, Flex } from "antd"
import UMSSelect from "../../../components/form/UMSSelect"

const semesterOptions= [
    {
        value: '01',
        label: 'Autumn',
    },
    {
        value: '02',
        label: 'Summer',
    },
    {
        value: '03',
        label: 'Fall',
    },
]

const currentYear = new Date().getFullYear()
const yearOptions = [0,1,2,3,4].map(item=> ({
    value:(currentYear+item).toString(),
    label:(currentYear+item).toString()
}))

const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues>= (data) =>{
        const name = semesterOptions[parseInt(data.code)-1]?.label
        const semesterData = {
            name:name,
            code:data.code,
            year:data.year
        }
        console.log(semesterData)
        console.log(currentYear)
        console.log(yearOptions)

    }
  return (
    <Flex justify="center" align="center" >
        <Col span={6} >
        <UMSForm onSubmit={onSubmit}>
        <UMSSelect options={semesterOptions} name="code" label="Semester Name"/>
        <UMSSelect options={yearOptions} name="year" label="Year"/>
        <UMSInput type="number" name="startMonth" label="Start Month"/>
        <UMSInput type="number" name="endMonth" label="End Month"/>
        <Button htmlType="submit" >Submit</Button>
    </UMSForm>
    </Col>
    </Flex>
  )
}

export default CreateAcademicSemester