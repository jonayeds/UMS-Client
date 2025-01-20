import { Form, Select } from "antd"
import { Controller } from "react-hook-form"

type TUMSSelectProps = {
    label:string,
    name:string,
    disabled?:boolean,
    options:{value:string, label:string}[]
}

const UMSSelect = ({label, name,options, disabled }:TUMSSelectProps) => {
  return (
    <Controller
    name={name}
    render={({field, fieldState:{error},  })=>(
        <Form.Item label={label}>

    <Select
    showSearch
    disabled={disabled}
    onChange={field.onChange}
    style={{ width: "100%" }}
    placeholder={`Search to Select ${label}`}
    optionFilterProp="label"
    options={options}
    />
    {error && <small style={{color:"red"}}>{error.message}</small>}
    </Form.Item>

    
)}
    />
  )
}

export default UMSSelect