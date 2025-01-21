import React, { ReactNode, useState } from "react";
import { TFilterParams } from "../../../constants/global";
import { Button, Flex, Pagination, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement.api";
import { Link } from "react-router-dom";


interface DataType {
    key: React.Key;
    name: string;
    id:string;
    email:string;
    academicDepartment: string;
    actions:ReactNode
  }


const StudentData = () => {
    const [page, setPage] = useState(1)
  const [params,setParams] = useState<TFilterParams>([])
  const { data: students, isFetching } =
    useGetAllStudentsQuery([ {name:"limit", value:"10"},
        {name:"page", value:`${page}`},
        {name:"sort", value:`id`}
        ,...params]);
    console.log(students)
  const tableData = students?.data?.map((element) => ({
    key: element._id,
    name: `${element.name.firstName} ${element.name.middleName || ""} ${element.name.lastName}`,
    id:element.id,
    email:element.email,
    academicDepartment:element.academicDepartment.name,
    actions:<Flex justify="space-between" align="center" gap={4}>
    <Link to={`/admin/student/${element._id}`}><Button onClick={()=>onClickDetails(element)} size="small">Details</Button></Link>
    <Button size="small">Update</Button>
    <Button size="small">Delete</Button>
    </Flex>
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
    {
      title: "Actions",
      dataIndex: "actions",
      filters: filterData
    },
  ];

  const onClickDetails = (details)=>{
    console.log(details)
  }


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
  const metaData = students?.meta

console.log(page)


  return (
    <>
    <Table<DataType>
        style={{overflowX:"auto"}}
      columns={columns}
      loading={isFetching}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
      pagination={false}
    />
    <Pagination style={{marginTop:"16px", }} onChange={(currentPage)=> setPage(currentPage)} defaultCurrent={1} pageSize={10} total={metaData?.total} />
    </>
  );
}

export default StudentData