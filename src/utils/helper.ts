import { useEffect, useState } from "react"
import { ConversionFormInterface } from "../components/ui/budget/conversion"
import { keyConstants } from "./keyConstants"

export const isAuthenticated = () => {
  const now = Date.now()
  const currentDate = new Date()
  // next year
  currentDate.setFullYear(currentDate.getFullYear() + 1)
  const expireTime = +currentDate
  // const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME)
  const tokenValidity = expireTime > now
  return tokenValidity
}

export const isUnAuthenticated = () => {
  const now = Date.now()
  const currentDate = new Date()
  // next year
  currentDate.setFullYear(currentDate.getFullYear() + 1)
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || currentDate
  )
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME)
  const tokenValidity = expireTime <= now || !token
  return tokenValidity
}

export const truncate = (text: string, n: number) =>
  text?.slice(0, 1) + `${text?.slice(1, n ?? 10)}....`

export function useMediaQuery(query: string, initialValue = false) {
  const [matches, setMatches] = useState<boolean>(initialValue)
  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export type Currency = "USD" | "GBP" | "JPY"
export type SourceCurrency = "NGN" | "GHS"

export const exchangeRates: {
  [key in SourceCurrency]: { [key in Currency]: number }
} = {
  NGN: {
    USD: 0.0013,
    GBP: 0.001,
    JPY: 0.18,
  },
  GHS: {
    USD: 0.086,
    GBP: 0.067,
    JPY: 12.55,
  },
}

export const areAllObjectsNotEmpty = (
  obj: ConversionFormInterface
): boolean => {
  return Object.values(obj).every(
    (currency) => Object.keys(currency).length > 0
  )
}

export function currencyFormatter(amount: number) {
  const roundedAmount = Math.round(Number(amount) * 100) / 100
  const [integerPart] = roundedAmount.toFixed(2).split(".")
  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return integerWithCommas
}
