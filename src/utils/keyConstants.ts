import cardImage1 from "../assets/svg/card1.svg"
import cardImage2 from "../assets/svg/card2.svg"

export const keyConstants = {
  EXPIRY_TOKEN_TIME: "auth_expiry",
  AUTH_TOKEN: "auth_key",
}

export interface DashboardCardInterface {
  id: number
  description: string
  department: string
  unitCount: string
  image: string
  background: string
  cardBackground: string
  departmentCount: string
}

export const DashboardCards: DashboardCardInterface[] = [
  {
    id: 0,
    description:
      "But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each number.",
    department: "Design Team",
    departmentCount: "1 Department",
    unitCount: "1 Unit",
    image: cardImage1,
    background: "bg-[#E6F2FF]",
    cardBackground: "bg-[#7DC9FF]",
  },
  {
    id: 1,
    description:
      "But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each number.",
    department: "Design Team",
    departmentCount: "1 Department",
    unitCount: "1 Unit",
    image: cardImage2,
    background: "bg-[#FFF3B5]",
    cardBackground: "bg-[#FFE756]",
  },
]

export interface CountryOption {
  code: string
  name: string
  currencySymbol: string
  flag: string
}

export interface CurrencyOption {
  code: string
  flag: string
  currencySymbol: string
}

export const countryOptions: CountryOption[] = [
  { code: "USD", name: "United States", currencySymbol: "$", flag: "🇺🇸" },
  { code: "EUR", name: "European Union", currencySymbol: "€", flag: "🇪🇺" },
  { code: "JPY", name: "Japan", currencySymbol: "¥", flag: "🇯🇵" },
  { code: "GBP", name: "United Kingdom", currencySymbol: "£", flag: "🇬🇧" },
  { code: "NGN", name: "Nigeria", currencySymbol: "₦", flag: "🇳🇬" },
]

export const countryCurrencyOptions: CountryOption[] = [
  { code: "USD", name: "United States", currencySymbol: "$", flag: "🇺🇸" },
  { code: "JPY", name: "Japan", currencySymbol: "¥", flag: "🇯🇵" },
  { code: "GBP", name: "United Kingdom", currencySymbol: "£", flag: "🇬🇧" },
]

export const currencyOptions: CurrencyOption[] = [
  { code: "NGN", currencySymbol: "₦", flag: "🇳🇬" },
  {
    code: "GHS",
    currencySymbol: "₵",
    flag: "🇬🇭",
  },
]

export const taxTypes = [
  { label: "VAT", value: "VAT", description: "Value Added Tax" },
  { label: "GST", value: "GST", description: "Goods and Services Tax" },
  { label: "Sales Tax", value: "ST", description: "Sales Tax" },
  { label: "Excise Tax", value: "ET", description: "Excise Tax" },
]
