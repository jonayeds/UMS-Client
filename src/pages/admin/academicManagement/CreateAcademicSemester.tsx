import { FieldValues, SubmitHandler } from "react-hook-form";
import UMSForm from "../../../components/form/UMSForm";
import { Button, Col, Flex } from "antd";
import UMSSelect from "../../../components/form/UMSSelect";
import { monthOptions } from "../../../constants/global";
import { semesterOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";

import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((item) => ({
  value: (currentYear + item).toString(),
  label: (currentYear + item).toString(),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOptions[parseInt(data.code) - 1]?.label;
    const semesterData = {
      ...data,
      name,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
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
