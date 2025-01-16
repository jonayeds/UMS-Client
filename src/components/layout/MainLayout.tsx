import { Button, Layout } from 'antd';
import {  Outlet } from 'react-router-dom';

import SideBar from './SideBar';
import { useAppDispatch } from '../../redux/hooks';
import { logOut } from '../../redux/features/auth/authSlice';
const { Header, Content } = Layout;




const MainLayout = () => {
  const dispatch = useAppDispatch()
  const handleLogOut = ()=>{
    dispatch(logOut())
  }
  return (
    <Layout style={{minHeight:"100vh"}}>
     <SideBar/>
      <Layout>
        <Header style={{ padding: "4px 16px", display:'flex', justifyContent:"end" ,alignItems:"center" }} >

        <Button style={{margin:""}} onClick={handleLogOut}>Logout</Button>
        </Header>
        <Content style={{ margin: '24px 16px 0' , height:"200vh"}}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout