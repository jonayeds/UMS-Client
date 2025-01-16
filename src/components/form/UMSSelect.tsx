import { Form, Select } from "antd"
import { Controller } from "react-hook-form"

type TUMSSelectProps = {
    label:string,
    name:string,
    options:{value:string, label:string}[]
}

const UMSSelect = ({label, name,options }:TUMSSelectProps) => {
  return (
    <Controller
    name={name}
    render={({field})=>(

        <Form.Item label={label}>

    <Select
    onChange={field.onChange}
    showSearch
    style={{ width: "100%" }}
    placeholder="Search to Select"
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={options}
    />
    </Form.Item>
)}
    />
  )
}

export default UMSSelect