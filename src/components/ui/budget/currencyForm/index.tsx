import { message, Select } from "antd"
import React, { ChangeEvent, FormEvent, useState } from "react"
import edit from "../../../../assets/svg/edit.svg"
import {
  CountryOption,
  countryOptions,
  taxTypes,
} from "../../../../utils/keyConstants"
import CustomButton from "../../../custom/button"
import FormError from "../../../custom/formError"
import CustomInput from "../../../custom/input"
import Tag from "../../../custom/tag"
import AntSelectWrapper from "../../countryCurrency"

const { Option } = Select
export interface FormValueInterface {
  currency: string
  taxType: string
  taxRate: string
  amount: number
}

interface FormErrors {
  taxType?: string
  currency?: string
  amount?: string
  taxRate?: string
}

const CurrencyForm = () => {
  const [formValues, setFormValues] = useState<FormValueInterface>({
    currency: "",
    taxType: "",
    taxRate: "",
    amount: 0,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [messageApi, contextHolder] = message.useMessage()
  const handleChange = (field: keyof FormValueInterface, value: string) => {
    setFormValues((values) => {
      return { ...values, [field]: value }
    })
    if (errors[field]) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }))
    }
  }
  const info = () => {
    messageApi.success("Overview Edited successfully")
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formValues.taxType) newErrors.taxType = "Please select a tax type."
    if (!formValues.currency) newErrors.currency = "Please select a currency."
    if (
      !formValues.amount ||
      isNaN(Number(formValues.amount)) ||
      Number(formValues.amount) <= 0
    ) {
      newErrors.amount = "Enter a value"
    }
    return newErrors
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      info()
    }
  }

  const renderCountryOption = (option: CountryOption) => (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{option.flag}</span>
        <span>{option.name}</span>
      </div>
      <span>{option.currencySymbol}</span>
    </div>
  )

  const renderTaxOption = (option: { label: string; description: string }) => (
    <div className="flex items-center justify-between py-2 text-sm">
      <span>{option?.label}</span>
      <span>{option?.description}</span>
    </div>
  )

  const formatCountryOption = (
    <>
      {countryOptions?.map((option) => (
        <Option
          key={option?.code}
          value={option?.code}
          label={renderCountryOption(option)}
        >
          {renderCountryOption(option)}
        </Option>
      ))}
    </>
  )

  const renderTax = (
    <>
      {taxTypes.map((tax) => (
        <Option key={tax.value} value={tax.value}>
          {renderTaxOption(tax)}
        </Option>
      ))}
    </>
  )

  return (
    <React.Fragment>
      {contextHolder}
      <div className="border-[1px] border-gray-200 rounded-2xl mb-5 md:mb-0">
        <div className="py-5 border-b-[1px] border-gray-200">
          <h1 className="text-medium lg:text-xMedium px-7">Currency</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="py-5 px-5">
            <div className="flex justify-end">
              <Tag text="Basic User" />
            </div>
            <div className="pb-4">
              <AntSelectWrapper
                onChange={(value: string) => handleChange("currency", value)}
                placeholder="Currency"
                formatOptions={formatCountryOption}
                label="Principal Currency"
              />
              {errors?.currency && <FormError error={errors.currency} />}
            </div>
            <div className="pb-4">
              <AntSelectWrapper
                onChange={(value: string) => handleChange("taxType", value)}
                options={taxTypes}
                placeholder="Select tax type"
                formatOptions={renderTax}
                label="Tax type"
              />
              {errors?.taxType && <FormError error={errors.taxType} />}
            </div>
            <div className="flex items-start gap-5 pb-4">
              <CustomInput
                placeholder="Fixed Amount"
                disabled
                value="Fixed Amount"
                label="Tax rate"
                name="taxRate"
                onChange={() => handleChange("taxRate", "Fixed Amount")}
              />
              <div className="">
                <CustomInput
                  placeholder="Fixed Amount"
                  name="amount"
                  label="Tax rate unit"
                  type="number"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange("amount", e?.target?.value)
                  }
                  autoComplete="off"
                />
                {errors?.amount && <FormError error={errors.amount} />}
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-20 border-t-[1px] border-gray-200">
            <div className="px-7 py-5">
              <CustomButton variant="form" type="submit">
                <img src={edit} alt="edit" />
                Edit Overview
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default CurrencyForm
