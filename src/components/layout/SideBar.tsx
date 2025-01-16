import { Layout, Menu } from "antd";
import { sideBarGenerator } from "../../utils/sidebarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const SideBar = () => {
    const {  Sider } = Layout;
    const user = useAppSelector(selectCurrentUser)
    const userRole = {
        Admin:"admin",
        Faculty:"faculty",
        Student:"student"
    }
    let sideBarItems;
    switch (user?.role) {
        case userRole.Admin:
            sideBarItems = sideBarGenerator(adminPaths, userRole.Admin) 
            break;
        case userRole.Faculty:
            sideBarItems = sideBarGenerator(facultyPaths, userRole.Faculty)  
            break;
        case userRole.Student:
            sideBarItems = sideBarGenerator(studentPaths, userRole.Student)  
            break;
    
        default:
            break;
    }
  return (
    <Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}  >
    <div className="demo-logo-vertical" />
    <div style={{height:"4rem", display:"flex", justifyContent:"center", alignItems:"center"}}><h1 style={{color:"whitesmoke"}}>UMS</h1></div>
    <Menu     style={{
      position:"sticky",
      height:"100vh",
      overflowY:"auto",
      top:"0px",
      left:"0px"
      
    }} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideBarItems} />
  </Sider>
  )
}

export default SideBar