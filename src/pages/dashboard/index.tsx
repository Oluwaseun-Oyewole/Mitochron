import React, { useEffect, useRef } from "react"
import draft from "../../assets/svg/department.svg"
import plusIcon from "../../assets/svg/Plus_Button.svg"
import ModalWrapper, { IModalWrapper } from "../../components/antd/modal"
import CustomButton from "../../components/custom/button"
import { useGlobalStoreHook } from "../../hooks"
import { DashboardCards } from "../../utils/keyConstants"

const Dashboard = () => {
  const modalRef = useRef<IModalWrapper>(null)

  const { scrollToTop } = useGlobalStoreHook()

  useEffect(() => {
    scrollToTop()
  }, [])

  const createDepartmentModal = () => {
    modalRef.current?.open({
      title: "",
      content: (
        <div>
          <h1 className="flex items-center justify-center font-normal text-lg">
            Department form coming soon
          </h1>
        </div>
      ),
    })
  }

  return (
    <React.Fragment>
      <ModalWrapper ref={modalRef} />
      <section className="mt-8 flex flex-col xl:flex-row items-start gap-5 pl-[25px] pr-5 md:pr-10">
        <ul className="lg:overflow-x-scroll flex flex-col md:flex-row gap-5 items-start basis-[67%] bg-red-500 h-[270px]">
          {DashboardCards?.map((card, index) => {
            return (
              <li
                key={index}
                className={`${card?.background} p-4 rounded-2xl flex flex-col justify-between w-full md:h-[270px] hover:opacity-90 transition-all ease-in-out duration-500`}
              >
                <div
                  className={`${card?.cardBackground} px-3 py-6 rounded-2xl text-small leading-6`}
                >
                  <h2>{card?.description}</h2>
                </div>
                <div className="text-small flex justify-between pt-7 pb-2 items-center">
                  <div>
                    <h3 className="text-sm">{card?.department}</h3>
                    <div className="flex items-center gap-3 pt-2">
                      <h3>{card?.departmentCount}</h3>
                      <h3>{card?.unitCount}</h3>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-[40px]"
                      src={card?.image}
                      alt={card?.description?.slice(0, 10)}
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="bg-gray-100 flex justify-between flex-col items-center rounded-2xl basis-[33%] h-[270px] hover:opacity-90 transition-all ease-in-out duration-500">
          <div />
          <div className="bg-white p-2 rounded-full w-fit">
            <img src={plusIcon} className="w-[60px]" alt="" />
          </div>

          <div className="w-[90%] mb-4">
            <CustomButton
              variant="secondary"
              className="!bg-white !border-green-800"
              onClick={createDepartmentModal}
            >
              <img src={draft} alt="" />
              <p> Create a department</p>
            </CustomButton>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Dashboard
