import { useState } from "react";
import { TFilterParams } from "../../../constants/global";
import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";


interface DataType {
    key: React.Key;
    name: string;
    id:string;
    email:string;
    academicDepartment: string;
  }


const StudentData = () => {
  const [params,setParams] = useState<TFilterParams>([])
  const { data: students, isFetching } =
    useGetAllStudentsQuery(params);
    console.log(students)
  const tableData = students?.data?.map((element) => ({
    key: element._id,
    name: `${element.name.firstName} ${element.name.middleName || ""} ${element.name.lastName}`,
    id:element.id,
    email:element.email,
    academicDepartment:element.academicDepartment.name
  }));
  const {data:academicDepartmentData} = useGetAllAcademicDepartmentQuery(undefined) 
  const filterData = academicDepartmentData?.data?.map(item => ({text:item.name, value:item._id}))
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "ID",
      dataIndex: "id",
      showSorterTooltip: { target: "full-header" },
      sortDirections: ["descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Department",
      dataIndex: "academicDepartment",
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
      filters.academicDepartment?.forEach(item =>  queryParams.push({name:'academicDepartment', value:item as string}))
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
}

export default StudentData