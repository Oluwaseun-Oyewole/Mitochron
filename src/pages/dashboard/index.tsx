import React, { useRef } from "react"
import draft from "../../assets/svg/department.svg"
import plusIcon from "../../assets/svg/Plus_Button.svg"
import ModalWrapper, { IModalWrapper } from "../../components/antd/modal"
import CustomButton from "../../components/custom/button"
import { DashboardCards } from "../../utils/keyConstants"

const Dashboard = () => {
  const modalRef = useRef<IModalWrapper>(null)

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
      <section className="mt-8 grid grid-flow-col grid-cols-[70%_30%] gap-5">
        <ul className="gap-5 bg-red-500 overflow-x-scroll flex">
          {DashboardCards?.map((card, index) => {
            return (
              <li key={index} className={`${card?.background} p-4 rounded-2x`}>
                <div className=" w-[350px]">
                  <div
                    className={`${card?.cardBackground} p-4 rounded-2xl text-small leading-6`}
                  >
                    <h2>{card?.description}</h2>
                  </div>
                  <div className="py-4 text-small flex justify-between items-center">
                    <div>
                      <h3 className="text-sm">{card?.department}</h3>
                      <div className="flex items-center gap-3  pt-1">
                        <h3>{card?.departmentCount}</h3>
                        <h3>{card?.unitCount}</h3>
                      </div>
                    </div>
                    <div>
                      <img
                        src={card?.image}
                        alt={card?.description?.slice(0, 10)}
                      />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center flex-col">
          <div className="bg-white p-2 rounded-full">
            <img src={plusIcon} className="w-[60px]" alt="" />
          </div>

          <div className="w-[90%] mt-10">
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
