/* eslint-disable @typescript-eslint/no-explicit-any */
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
    console.log(defaultValues)
    if(defaultValues){
        formConfig["defaultValues"] = defaultValues
    }
  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default UMSForm;
