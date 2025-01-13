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
    <Layout style={{height:"100vh"}}>
     <SideBar/>
      <Layout>
        <Header style={{ padding: 0, }} />
        <Button onClick={handleLogOut}>Logout</Button>
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
      </Layout>
    </Layout>
  )
}

export default MainLayout