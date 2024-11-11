import { Select } from "antd"
import { ChangeEvent, FormEvent, useState } from "react"
import {
  areAllObjectsNotEmpty,
  Currency,
  currencyFormatter,
  exchangeRates,
  SourceCurrency,
} from "../../../../utils/helper"
import {
  countryCurrencyOptions,
  CountryOption,
  CurrencyOption,
  currencyOptions,
} from "../../../../utils/keyConstants"
import CustomInput from "../../../custom/input"
import AntSelectWrapper from "../../countryCurrency"

const { Option } = Select
export interface ConversionFormInterface {
  fromCurrency: SourceCurrency
  amount: number
  toCurrency: Currency
}

const Conversion = () => {
  const [formValues, setFormValues] = useState<ConversionFormInterface>({
    fromCurrency: "NGN",
    amount: 0,
    toCurrency: "USD",
  })
  const [convertedAmount, setConvertedAmount] = useState(0)

  const convertCurrency = (
    amount: number,
    fromCurrency: SourceCurrency,
    toCurrency: Currency
  ): number => {
    const rate = exchangeRates[fromCurrency][toCurrency]
    const convertedAmount = amount * rate
    return parseFloat(convertedAmount.toFixed(2))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((values) => {
      return { ...values, amount: +e.target.value }
    })
    const allNotEmpty = areAllObjectsNotEmpty(formValues)
    if (allNotEmpty) {
      const convertedAmount = convertCurrency(
        +e.target.value,
        formValues?.fromCurrency,
        formValues?.toCurrency
      )
      setConvertedAmount(convertedAmount)
    }
  }

  const handleChange = (
    field: keyof ConversionFormInterface,
    value: string
  ) => {
    setFormValues((values) => {
      return { ...values, [field]: value }
    })
    const allNotEmpty = areAllObjectsNotEmpty(formValues)
    if (allNotEmpty) {
      const convertedAmount = convertCurrency(
        formValues?.amount,
        formValues?.fromCurrency,
        formValues?.toCurrency
      )
      setConvertedAmount(convertedAmount)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const renderCountryOption = (option: CountryOption) => (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{option.flag}</span>
        <span>{option.code}</span>
        <p>{currencyFormatter(convertedAmount)}</p>
      </div>
      <span>{option.currencySymbol}</span>
    </div>
  )

  const renderCurrencyOption = (option: CurrencyOption) => (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{option.flag}</span>
        <span>{option.code}</span>
      </div>
      <span>{option.currencySymbol}</span>
    </div>
  )

  const formatCountryOption = (
    <>
      {countryCurrencyOptions?.map((option) => (
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

  const formatCurrencyOption = (
    <>
      {currencyOptions?.map((option: CurrencyOption) => (
        <Option
          key={option?.code}
          value={option?.code}
          label={renderCurrencyOption(option)}
        >
          {renderCurrencyOption(option)}
        </Option>
      ))}
    </>
  )

  return (
    <div>
      <div className="border-[1px] border-gray-200 rounded-2xl">
        <div className="py-5 border-b-[1px] border-gray-200">
          <h1 className="text-medium lg:text-xMedium px-7">Conversion Rate</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-7 py-5">
            <div className="pb-4 grid grid-flow-cols grid-cols-[40%_60%] items-center">
              <AntSelectWrapper
                onChange={(value: string) =>
                  handleChange("fromCurrency", value)
                }
                placeholder="Currency"
                formatOptions={formatCurrencyOption}
              />

              <div className="-ml-5 -mt-1">
                <CustomInput
                  name="amount"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="pb-4">
              <AntSelectWrapper
                onChange={(value: string) => handleChange("toCurrency", value)}
                placeholder="Currency"
                formatOptions={formatCountryOption}
              />
              <p></p>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-error-100 flex items-center py-6 lg:py-10 px-8 rounded-3xl my-5">
        <p className="text-error-200 text-sm lg:text-medium leading-7 lg:leading-8">
          You cannot change the Principal Currency once the financial year has
          commenced
        </p>
      </div>
    </div>
  )
}

export default Conversion
