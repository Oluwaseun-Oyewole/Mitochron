import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <>
      {/* <Navigation routes={dashboardNav} /> */}
      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </>
  )
}

export default DashboardLayout
