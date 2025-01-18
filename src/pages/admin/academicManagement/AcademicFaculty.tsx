import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicFaculty } from "../../../types";
import { TFilterParams } from "../../../constants/global";

type TTableData = Pick<TAcademicFaculty,"name"> 

type OnChange = NonNullable<TableProps<TTableData>['onChange']>;
type Filters = Parameters<OnChange>[1];




const AcademicFaculty = () => {
  const [ params, setParams] = useState<TFilterParams>([])
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const {data:academicFacultyData, isFetching} = useGetAllAcademicFacultyQuery(params)
  console.log(academicFacultyData)
  const tableData = academicFacultyData?.data?.map(({_id, name})=> ({
    key:_id,
    name
  }))
  console.log(tableData)


  const handleChange: OnChange = (pagination, filters, sorter, extra) => {
    console.log('Various parameters', pagination, filters, sorter);
    if(extra.action === "filter"){
      const filterParams:TFilterParams = []
      filters.name?.forEach(item=> filterParams.push({name:"name", value:item as string}))
      setParams(filterParams)
      setFilteredInfo(filters);
    }
  };

  const clearFilters = () => {
    setFilteredInfo({});
    setParams([])
  };

  const clearAll = () => {
    setFilteredInfo({});
  };



  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Academic Faculty Name',
      dataIndex: 'name',
      key: 'name',
      filters: tableData?.map(item=> ({text:item.name, value:item.name})),
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value as string),
      ellipsis: true
    },
  ];



  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button >Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table<TTableData> loading={isFetching} columns={columns} dataSource={tableData} onChange={handleChange} />
    </>
  )
}

export default AcademicFaculty