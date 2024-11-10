import { notification } from "antd"
import classNames from "classnames"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../../../assets/svg/logo.svg"
import message from "../../../assets/svg/message.svg"
import bell from "../../../assets/svg/notifications.svg"
import appRoutes from "../../../routes/app.routes"
import Hamburger from "../hambugger"
import { MobileNavigation } from "../mobile"

const HeaderNavigation = () => {
  const { pathname } = useLocation()
  const [api, contextHolder] = notification.useNotification()

  const close = () => {
    api.destroy()
  }
  const openNotification = () => {
    const key = `open${Date.now()}`
    api.open({
      message: "Notification Title",
      description: "No Notification presently",
      key,
      onClose: close,
    })
  }

  return (
    <header
      className="sticky top-0 left-0 font-roboto border-b-[1px] border-gray-200"
      role="banner"
    >
      <nav
        className="flex items-center justify-between h-[15vh] backdrop-blur-sm container bg-white"
        aria-label="Navigation"
      >
        <div className="block md:hidden">
          <img src={logo} alt="logo icon" className="w-[100.5px]" />
        </div>
        <ul className="md:flex items-center gap-8 hidden">
          <img src={logo} alt="logo" className="w-[110px] xl:w-[137.5px]" />
          <ul className="flex items-center bg-gray-100 px-6 xl:px-3 py-2 gap-5 rounded-3xl">
            {appRoutes?.map(({ path, name, imagePath }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={classNames(
                      "flex items-center gap-3 text-small px-4 xl:px-6 py-3 rounded-2xl hover:bg-gray-50 transition-all ease-in-out duration-500",
                      { "bg-white": path === pathname }
                    )}
                  >
                    <img
                      src={imagePath}
                      alt="link"
                      className="w-[17px] md:hidden lg:block xl:w-[24.67px]"
                    />
                    <p className="font-normal text-sm md:text-xs xl:text-base">
                      {name}
                    </p>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </ul>

        <ul className="flex items-center gap-2 md:hidden lg:flex">
          <li className="bg-gray-100 w-[40px] xl:w-[60px] h-[40px] xl:h-[60px] rounded-full flex items-center justify-center">
            <img
              src={bell}
              alt="notification"
              className="w-[20px] xl:w-[25px]"
              role="button"
              onClick={openNotification}
            />
          </li>
          <li className="bg-gray-100  w-[40px] xl:w-[60px] h-[40px] xl:h-[60px] rounded-full flex items-center justify-center">
            <img src={message} alt="message" className="w-[20px] xl:w-[25px]" />
          </li>
        </ul>

        {contextHolder}
        <div className="block md:hidden">
          <Hamburger />
        </div>
      </nav>
      <MobileNavigation />
    </header>
  )
}

export default HeaderNavigation
