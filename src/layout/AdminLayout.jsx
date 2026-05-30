import { Outlet } from "react-router"
import Sidebar from "../components/admin/Sidebar"
import TopMenu from "../components/admin/TopMenu"
import { useState } from "react"
function AdminLayout() {
  const [toggle, setToggle] = useState(false)
  const openSidebar = () => {
    setToggle(!toggle)
    console.log("it's working.")
  }

  return (
    <div className="flex items-start">
        <Sidebar isActive={toggle}/>

        <div className="grow">
          <TopMenu openSidebar={openSidebar}/>
          <Outlet />
        </div>

    </div>
  )
}

export default AdminLayout
