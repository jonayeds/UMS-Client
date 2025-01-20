import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import UMSForm from "../../../components/form/UMSForm";
import UMSInput from "../../../components/form/UMSInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import UMSSelect from "../../../components/form/UMSSelect";
import UMSDatePicker from "../../../components/form/UMSDatePicker";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import { useGetAllAcademicDepartmentQuery, useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";



const studentDefaultValues = {
  name: {
    firstName: "Buta",
    lastName: "Gorila",
  },
  gender: "Male",
  email: "student@04.com",
  contactNumber: "1234567890",
  emergencyContact: "0987654321",
  bloodGroup: "B+",
  presentAddress: "123 Main Street, Springfield",
  permanentAddress: "456 Elm Street, Springfield",
  guardian: {
    fatherName: "Robert Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "9876543210",
    motherName: "Mary Doe",
    motherContactNo: "8765432109",
    motherOccupation: "Teacher",
  },
  localGuardian: {
    name: "David Smith",
    address: "789 Pine Street, Springfield",
    occupation: "Doctor",
    contactNo: "7654321098",
  },
  admissionSemester: "6772ae5c9134c14898f0c0a4",
  academicDepartment: "6772aca3bbb74cdcef1609cf",
}


// const studentDummy = {
//   student: studentDefaultValues,
//   password: "123456",
// };

const CreateStudent = () => {
  const [addStudent] = useAddStudentMutation()
  const {data:sData, isLoading:sLoading} = useGetAllSemestersQuery(undefined)
  const {data:dData, isLoading:dLoading} = useGetAllAcademicDepartmentQuery(undefined)
  const departmentOptions = dData?.data?.map(item => ({value:item._id, label:item.name}))
  const semesterOptions = sData?.data?.map(item => ({value:item._id, label:`${item.name} ${item.year}`}))
  const onSubmit: SubmitHandler<FieldValues> =async (data) => {
    const formData = new FormData();
    // console.log({ data: JSON.stringify(data) });
    formData.append("data", JSON.stringify({student:data}));
    // const res = await addStudent(formData)
    console.log(data)
    // console.log(res)
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <UMSForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Divider>Personal Info</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{span:8}} md={{span:12}}>
              <UMSInput label="First Name" type="text" name="name.firstName" />
            </Col>
            <Col span={24} lg={{span:8}} md={{span:12}}>
              <UMSInput label="Middle Name" type="text" name="name.middleName" />
            </Col>
            <Col span={24} lg={{span:8}} md={{span:12}}>
              <UMSInput label="Last Name" type="text" name="name.lastName" />
            </Col>
            <Col span={24} lg={{span:8}} md={{span:12}}>
            <Controller
              name="image"
              
              render={({field:{onChange,value, ...field}})=> <Form.Item label="Profile">
                 <Input {...field} value={value?.fileName} type="file" name="image" onChange={(e)=>onChange(e.target?.files?.[0])}/>
              </Form.Item>}
            />
             
            </Col>
          
            <Col span={24} lg={{span:8}} md={{span:12}}>
             <UMSSelect options={genderOptions} label="Gender" name="gender"/>
            </Col>
            <Col span={24} lg={{span:8}} md={{span:12}}>
              <UMSDatePicker label="Date of birth"  name="dateOfBirth" />
            </Col>
            <Col span={24} lg={{span:8}} md={{span:12}}>
              <UMSSelect label="Blood Group" options={bloodGroupOptions} name="bloodGroup"/>
            </Col>
          </Row>
          <Divider >Contact Info</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{span:8}} md={{span:12}}>
              <UMSInput label="Email" type="text" name="email" />
            </Col>
            <Col span={24} lg={{span:8}} md={{span:12}}>
              <UMSInput label="Contact Number" type="number" name="contactNumber" />
            </Col>
            <Col span={24} lg={{span:8}} md={{span:12}}>
              <UMSInput label="emergency Contact" type="number" name="emergencyContact" />
            </Col>
            <Col span={24} lg={{span:12}} md={{span:12}}>
              <UMSInput label="Present Address" type="text" name="presentAddress" />
            </Col>
            <Col span={24} lg={{span:12}} md={{span:12}}>
              <UMSInput label="Permanent Address" type="text" name="permanentAddress" />
            </Col>
          </Row>
          <Divider>Guardian Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}}>
            <Col span={24} >
              <UMSInput label="Father Name" type="text" name="guardian.fatherName" />
            </Col>
            <Col span={24} >
              <UMSInput label="Father Occupation" type="text" name="guardian.fatherOccupation" />
            </Col>
            <Col span={24} >
              <UMSInput label="Father ContactNo" type="number" name="guardian.fatherContactNo" />
            </Col>
            </Col>
            <Col span={24} md={{span:12}}>
            <Col span={24}  >
              <UMSInput label="Mother Name" type="text" name="guardian.motherName" />
            </Col>
            <Col span={24} >
              <UMSInput label="Mother ContactNo" type="number" name="guardian.motherContactNo" />
            </Col>
            <Col span={24} >
              <UMSInput label="Mother Occupation" type="text" name="guardian.motherOccupation" />
            </Col>
            </Col>
            <Col>
           
            </Col>
          </Row>
          <Divider>Local Guardian Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}}>
            <Col span={24} >
              <UMSInput label="Guardian Name" type="text" name="localGuardian.name" />
            </Col>
            <Col span={24} >
              <UMSInput label="Guardian Address" type="text" name="localGuardian.address" />
            </Col>
            
            </Col>
            <Col span={24} md={{span:12}}>
            <Col span={24} >
              <UMSInput label="Guardian Occupation" type="text" name="localGuardian.occupation" />
            </Col>
            <Col span={24} >
              <UMSInput label="Guardian ContactNo" type="number" name="localGuardian.contactNo" />
            </Col>
            </Col>
            <Col>
           
            </Col>
          </Row>
          <Divider>Academic Info</Divider>
          <Row gutter={8}>
            <Col span={12}>
              <UMSSelect disabled={sLoading} options={semesterOptions || []} name="academicSemester" label="Semester" />
            </Col>
            <Col span={12}>
              <UMSSelect disabled={dLoading} options={departmentOptions || []} name="academicDepartment" label="Department" />
            </Col>
          </Row>
          <Row justify={"center"}>
          <Button htmlType="submit">Submit</Button>
          </Row>
        </UMSForm> 
      </Col>
    </Row>
  );
};

export default CreateStudent;
