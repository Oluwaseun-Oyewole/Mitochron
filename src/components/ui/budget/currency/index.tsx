import { DatePicker } from "antd"
import React from "react"
import calender from "../../../../assets/svg/calendar_month.svg"
import Conversion from "../conversion"
import CurrencyForm from "../currencyForm"

export interface FormValueInterface {
  currency: string
  taxType: string
  taxRate: string
  amount: number
}

const CurrencyAndTaxes = () => {
  return (
    <React.Fragment>
      <div className="flex items-center gap-7 bg-gray-50x border-b-[1px] border-gray-200 md:pb-5 pl-5 md:pl-0 pr-5 md:pr-10 overflow-x-scroll md:overflow-x-hidden">
        <h1 className="hidden md:block text-small lg:text-medium md:pl-[25px]">
          Financial Year
        </h1>
        <div className="flex items-center gap-7">
          <h2 className="text-sm lg:text-small">Start</h2>
          <DatePicker
            format="DD, MMMM, YY"
            placeholder="10, October, 24"
            suffixIcon={
              <img src={calender} className="w-[15px]" alt="calender" />
            }
            className="!bg-gray-100 !px-5 py-4 !w-[180px] !rounded-lg !border-transparent"
          />
        </div>
        <div className="flex items-center gap-7">
          <h2 className="text-sm lg:text-small">End</h2>
          <DatePicker
            format="DD, MMMM, YY"
            placeholder="10, October, 24"
            suffixIcon={
              <img src={calender} className="w-[15px]" alt="calender" />
            }
            className="!bg-gray-100 py-4 !px-5 !w-[180px] !rounded-lg !border-transparent"
          />
        </div>
      </div>
      <div className="block md:grid xl:grid lg:block grid-flow-col w-full md:grid-cols-[55%_41%] xl:grid-cols-[49%_49%] justify-between items-start pl-[25px] mt-5 b-10 pr-5 md:pr-10 mb-0">
        <CurrencyForm />
        <Conversion />
      </div>
    </React.Fragment>
  )
}

export default CurrencyAndTaxes
