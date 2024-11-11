import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import avatar from "../../../assets/png/avatar.png"
import account from "../../../assets/svg/account.svg"
import world from "../../../assets/svg/clicked.svg"
import department from "../../../assets/svg/department.svg"
import message from "../../../assets/svg/mail.svg"
import unit from "../../../assets/svg/units.svg"
import upgrade from "../../../assets/svg/upgrade.svg"
import web from "../../../assets/svg/web.svg"
import { useGlobalStoreHook } from "../../../hooks"
import CustomButton from "../button"
import Tag from "../tag"

const Sidebar = () => {
  const ref = useRef<HTMLUListElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const { details } = useGlobalStoreHook()

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delay: 0.5,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <aside
      role="complementary"
      className="w-full border-r-[1px] overflow-y-scroll h-screen hidden lg:block pl-10"
    >
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={containerVariant}
        className=""
      >
        <motion.li
          className="border-[1px] border-gray-200 rounded-2xl p-6 mr-5 mt-5  hover:bg-gray-50 transition-all ease-in-out duration-700"
          variants={itemVariant}
        >
          <div className="flex items-center gap-5">
            <img src={avatar} alt="user" className="w-[55px]" />
            <h2 className="text-large">{details?.username}</h2>
          </div>
          <div className="py-5">
            <div className="flex items-center gap-2">
              <img src={message} alt="mail" className="w-[23.6px]" />
              <p className="text-small">{details?.email}</p>
            </div>
            <div className="flex items-center gap-2 pt-3">
              <img src={web} alt="location" className="w-[23.6px]" />
              <p className="text-small">{details?.location}</p>
            </div>
          </div>

          {/* <div className="bg-red-500"> */}
          <CustomButton variant="secondary">
            <img src={account} alt="account" className="w-[25.6px]" />
            <p>Set up your account</p>
          </CustomButton>
          {/* </div> */}
        </motion.li>

        <motion.li
          className="border-[1px] border-gray-200  rounded-2xl p-6 my-5 mr-5 hover:bg-gray-50 transition-all ease-in-out duration-700"
          variants={itemVariant}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-medium text-gray-300">TEAMS</h1>
            <Tag text="Basic User" />
          </div>
          <div className="py-5">
            <div className="flex place-items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={department} alt="mail" className="w-[23.6px]" />
                <p className="text-small">Departments</p>
              </div>
              <p className="text-sm">{details?.departments}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 pt-3">
                <img src={unit} alt="location" className="w-[23.6px]" />
                <p className="text-small">Units</p>
              </div>
              <p className="text-sm">{details?.units}</p>
            </div>
          </div>

          {/* <div className="bg-red-500"> */}
          <CustomButton variant="secondary">
            <img src={upgrade} alt="upgrade account" className="w-[25.6px]" />
            <p>Upgrade your plan</p>
          </CustomButton>
          {/* </div> */}
        </motion.li>

        <motion.li
          className="border-[1px] mr-5 border-gray-200 rounded-2xl p-6  hover:bg-gray-50 transition-all ease-in-out duration-700"
          variants={itemVariant}
        >
          <div className="flex items-center g justify-between pb-5">
            <h1 className="text-medium text-gray-300">LINKS</h1>
          </div>

          {details?.socials?.map((social, index) => {
            return (
              <div key={index}>
                <CustomButton variant="secondary" className="!justify-start">
                  <img
                    src={world}
                    alt="upgrade account"
                    className="w-[25.6px]"
                  />
                  <a href={social}>{social?.split("www.")[1]}</a>
                </CustomButton>
              </div>
            )
          })}
        </motion.li>
      </motion.ul>
      <div className="border-gray-100 w-2 h-full" />
    </aside>
  )
}

export default Sidebar
