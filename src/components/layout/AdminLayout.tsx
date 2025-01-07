import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div>
        <h1>This is nav bar</h1>
        <Outlet/>
    </div>
  )
}

export default AdminLayout