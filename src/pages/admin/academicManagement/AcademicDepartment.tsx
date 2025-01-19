import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicDepartmentQuery, useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { useState } from "react";
import { TFilterParams } from "../../../constants/global";

interface DataType {
  key: React.Key;
  name: string;
  academicFaculty: string;
}







const AcademicDepartment = () => {

  const [params,setParams] = useState<TFilterParams>([])
  const { data: academicDepartment, isFetching } =
    useGetAllAcademicDepartmentQuery(params);
    console.log(params)
    console.log(academicDepartment)
  const tableData = academicDepartment?.data?.map((element) => ({
    key: element._id,
    name: element.name,
    academicFaculty: element.academicFaculty.name,
  }));
  const {data:academicFacultyData} = useGetAllAcademicFacultyQuery(undefined) 
  const filterData = academicFacultyData?.data?.map(item => ({text:item.name, value:item._id}))
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Academic Faculty",
      dataIndex: "academicFaculty",
      filters: filterData
    },
  ];


  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if(extra.action === "filter"){
      const queryParams:TFilterParams = []
      filters.academicFaculty?.forEach(item =>  queryParams.push({name:'academicFaculty', value:item as string}))
      setParams(queryParams )
      console.log(queryParams)
    }

  };



  return (
    <Table<DataType>
      columns={columns}
      loading={isFetching}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicDepartment;
