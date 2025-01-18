
import { FieldValues, SubmitHandler } from "react-hook-form";
import UMSForm from "../../../components/form/UMSForm";
import { Button, Col, Flex } from "antd";
import UMSSelect from "../../../components/form/UMSSelect";
import { monthOptions } from "../../../constants/global";
import { semesterOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";

import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TAcademicSemester, TResponse } from "../../../types";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((item) => ({
  value: (currentYear + item).toString(),
  label: (currentYear + item).toString(),
}));



const CreateAcademicSemester = () => {
    const [addAcademicSemester] = useAddAcademicSemesterMutation()
    const onSubmit: SubmitHandler<FieldValues> =async (data) => {
     const toastId =  toast.loading("Adding Academic Semester")
    const name = semesterOptions[parseInt(data.code) - 1]?.label;
    const semesterData = {
      ...data,
      name,
    };
    try {
        const res= await addAcademicSemester(semesterData) as TResponse<TAcademicSemester>
        console.log(res);
        if(res.data) toast.success("Added Academic Semester", {id:toastId})
        else if(res.error) toast.error(res?.error?.data?.message , {id:toastId})

    } catch (error) {
        console.log(error)
        toast.error( "Something went wrong", {id:toastId})
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <UMSForm resolver={zodResolver(academicSemesterSchema)} onSubmit={onSubmit}>
          <UMSSelect
            options={semesterOptions}
            name="code"
            label="Semester Name"
          />
          <UMSSelect options={yearOptions} name="year" label="Year" />
          <UMSSelect
            options={monthOptions}
            name="startMonth"
            label="Start Month"
          />
          <UMSSelect options={monthOptions} name="endMonth" label="End Month" />
          <Button htmlType="submit">Submit</Button>
        </UMSForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
