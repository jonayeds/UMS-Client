import { Form, Input } from "antd";
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
    <div style={{ marginBottom: "16px" }}>
      <Controller
        name={name}
        render={({ field, fieldState:{error} }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
            {error && <small style={{color:"red"}}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default UMSInput;
