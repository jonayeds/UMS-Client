import { Form, Select } from "antd"

const UMSSelect = ({label}:{label:string}) => {
  return (
    <Form.Item label={label}>

    <Select
    showSearch
    style={{ width: "100%" }}
    placeholder="Search to Select"
    optionFilterProp="label"
    filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
        {
            value: '1',
            label: 'Fall',
        },
        {
            value: '2',
            label: 'Autumn',
        },
        {
            value: '3',
            label: 'Summer',
        },
    ]}
    />
    </Form.Item>
  )
}

export default UMSSelect