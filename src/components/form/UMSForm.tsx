/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = Record<string, any>
type TFormProp = {
    onSubmit:SubmitHandler<FieldValues>;
    children:ReactNode,
    defaultValues?:TFormConfig
}


const UMSForm = ({ onSubmit, children, defaultValues }:TFormProp) => {
    const formConfig:TFormConfig = {}
    if(defaultValues){
        formConfig["defaultValues"] = defaultValues
    }
  const methods = useForm(formConfig);

  return (
    <FormProvider  {...methods}>
      <Form  layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
};

export default UMSForm;
