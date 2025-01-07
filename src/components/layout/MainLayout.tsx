import { Layout, Menu, MenuProps} from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const items:MenuProps["items"] = [
    {
        key:"dashboard",
        label:<NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
    },
    {
        key:"002",
        label:"Profile",
    },
    {
        key:"003",
        label:"User Management",
        children:[
            {
                key:"createStudent",
                label:<NavLink to={"/admin/create-student"}>Create Student</NavLink>,
            },
            {
                key:"createFaculty",
                label:<NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>
            },
            {
                key:"createAdmin",
                label:<NavLink to={"/admin/create-admin"}>Create Admin</NavLink>
            },
        ]
    },
]


const MainLayout = () => {
  return (
    <Layout style={{height:"100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <div style={{height:"4rem", display:"flex", justifyContent:"center", alignItems:"center"}}><h1 style={{color:"whitesmoke"}}>UMS</h1></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout