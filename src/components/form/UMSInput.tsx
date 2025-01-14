import { Input } from "antd";
import { Controller } from "react-hook-form";

const UMSInput = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label?: string;
}) => {
  return (
    <div style={{marginBottom:"16px"}}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
      name={name}
      render={({field})=>(<Input {...field} type={type} id={name} />)}
      />
      
    </div>
  );
};

export default UMSInput;
