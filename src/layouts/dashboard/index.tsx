import React from "react"
import Navigation from "../../components/custom/navigation"

const DashboardLayout = () => {
  return (
    <React.Fragment>
      <Navigation />
      {/* <main
        className="font-roboto container grid grid-flow-cols grid-cols-[0%_100%] md:grid-cols-[25%_70%] items-start"
        role="main"
      >
        <Sidebar />
        <Outlet />
      </main> */}
    </React.Fragment>
  )
}

export default DashboardLayout
