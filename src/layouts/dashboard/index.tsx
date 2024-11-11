import { Outlet } from "react-router-dom"
import Navigation from "../../components/custom/navigation"
import Sidebar from "../../components/custom/sidebar"

const DashboardLayout = () => {
  return (
    <>
      <Navigation />
      <main
        className="font-roboto grid lg:grid-flow-cols lg:grid-cols-[40%_60%] xl:grid-cols-[30%_70%] overflow-y-scroll min-h-screen"
        role="main"
      >
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}

export default DashboardLayout
