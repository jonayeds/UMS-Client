import { Button, Col, Flex } from "antd";
import UMSForm from "../../../components/form/UMSForm";
import UMSInput from "../../../components/form/UMSInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TAcademicFaculty, TResponse } from "../../../types";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Adding Academic faculty");
    try {
      const res = (await addAcademicFaculty(
        data
      )) as TResponse<TAcademicFaculty>;
      if (res?.data) {
        toast.success("Academic faculty added successfully", { id: toastId });
        
      }
      if (res?.error)
        toast.error(
          res?.error?.data?.errorSource?.[0]?.message ||
            res?.error?.data?.message,
          { id: toastId }
        );
      console.log(res);
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };
  return (
    <Flex justify="center">
      <Col span={8}>
        <UMSForm
          resolver={zodResolver(academicFacultySchema)}
          onSubmit={onSubmit}
        >
          <UMSInput type="text" name="name" label="Name" />
          <Button htmlType="submit">Submit</Button>
        </UMSForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
