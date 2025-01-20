import { DatePicker, Form } from "antd"
import { Controller } from "react-hook-form"

const UMSDatePicker = ({name, label }:{
    name: string;
    label?: string;
  }) => {
  return (
    <div style={{ marginBottom: "16px",width:"100%" }}>
      <Controller
        name={name}
        render={({ field, fieldState:{error} }) => (
          <Form.Item  label={label} >
            <DatePicker {...field} style={{width:"100%"}}/>
            {error && <small style={{color:"red"}}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  )
}

export default UMSDatePicker