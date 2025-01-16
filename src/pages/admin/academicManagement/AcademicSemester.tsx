
import type { TableColumnsType, TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';
import { useState } from 'react';

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const AcademicSemester = () => {
  const [filteredInfo] = useState<Filters>({});
  const [sortedInfo] = useState<Sorts>({});

  const {data:semesterData} = useGetAllSemestersQuery(undefined)
console.log(semesterData)
const tableData = semesterData?.data.map(({_id, name, startMonth, endMonth, year})=>({
key:_id, name, startMonth, endMonth,year
}))


  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
  };



  const columns: TableColumnsType<DataType> = [
    {
      title: 'Semester Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value as string),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
      key: 'startMonth',
      ellipsis: true,
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
      key: 'endMonth',
      ellipsis: true,
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      ellipsis: true,
    },
  ];

  return (
    <>
    <Space style={{ marginBottom: 16 }}>
        <Button >Sort age</Button>
        <Button >Clear filters</Button>
        <Button >Clear filters and sorters</Button>
      </Space>
      <Table<DataType> columns={columns} dataSource={tableData} onChange={handleChange} />
    </>
  );
};

export default AcademicSemester;