
import type { TableColumnsType, TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';
import { useState } from 'react';
import { TAcademicSemester } from '../../../types';

// interface ITableData extends TAcademicSemester {
//   key:string
// }
type TFilterParams = { name: string; value: string }[]

type ITableData = Pick<TAcademicSemester, "endMonth" | "name"|  "startMonth"| "year" >

type OnChange = NonNullable<TableProps<ITableData>['onChange']>;
type Filters = Parameters<OnChange>[1];
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;



const AcademicSemester = () => {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [params,setParams] = useState<TFilterParams>([])
  const [sortedInfo] = useState<Sorts>({});

  const {data:semesterData} = useGetAllSemestersQuery(params)
console.log(semesterData)
const tableData = semesterData?.data?.map(({_id, name, startMonth, endMonth, year})=>({
key:_id, name, startMonth, endMonth,year
}))

const clearFilters = () => {
  setFilteredInfo({});
};
  const handleChange: OnChange = (_pagination, filters, _sorter, extra) => {
    if(extra.action ==="filter"){
      const filterParams: TFilterParams = []
      filters.name?.forEach(item=> filterParams.push({name:"name", value:item as string}))
      filters.year?.forEach(item=> filterParams.push({name:"year", value:item as string}))
      setParams(filterParams)
      setFilteredInfo(filters);
    }
    console.log('Various parameters', filters, );
  };



  const columns: TableColumnsType<ITableData> = [
    {
      title: 'Semester Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Autumn', value: 'Autumn' },
        { text: 'Summer', value: 'Summer' },
        { text: 'Fall', value: 'Fall' },
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
      filters: [
        { text: '2025', value: '2025' },
        { text: '2026', value: '2026' },
        { text: '2027', value: '2027' },
        { text: '2028', value: '2028' },
      ],
      filteredValue: filteredInfo.year || null,
      onFilter: (value, record) => record.year.includes(value as string),
      sorter: (a, b) => a.year.length - b.year.length,
      sortOrder: sortedInfo.columnKey === 'year' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <>
    <Space style={{ marginBottom: 16 }}>
        <Button >Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button >Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={tableData} onChange={handleChange} />
    </>
  );
};

export default AcademicSemester;