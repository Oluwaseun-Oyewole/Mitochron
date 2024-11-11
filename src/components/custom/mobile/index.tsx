import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { useGlobalStoreHook } from "../../../hooks"
import appRoutes from "../../../routes/app.routes"

export const MobileNavigation = () => {
  const { isOpen, toggle } = useGlobalStoreHook()
  const { pathname } = useLocation()
  const variants = {
    hidden: { x: "100%", opacity: 0.3 },
    visible: {
      opacity: [0, 0.2, 0.6, 0.8, 1],
      x: 0,
      transition: {
        type: "spring",
        mass: 0.45,
        stiffness: 100,
        damping: 10,
      },
    },
    exit: { opacity: [1, 0.8, 0.5, 0.3, 0] },
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={variants}
          exit="exit"
          className={classNames(
            `fixed right-0 container left-0 w-full h-screen top-[15vh] bg-gray-100 shadow-lg z-50 md:hidden`
          )}
        >
          <motion.ul
            className="flex flex-col gap-4 my-5 pl-5 md:pl-10 pr-5 md:pr-10"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {appRoutes?.map(({ path, name, imagePath }, index) => {
              return (
                <motion.li
                  key={index}
                  className=""
                  variants={item}
                  onClick={() => toggle()}
                >
                  <Link
                    to={path}
                    className={classNames(
                      "flex items-center gap-5 text-small p-3 rounded-md hover:bg-gray-50 transition-all ease-in-out duration-500",
                      { "bg-white": path === pathname }
                    )}
                  >
                    <img src={imagePath} alt="" className="w-[20px]" />
                    <p className="font-normal text-base text">{name}</p>
                  </Link>
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
