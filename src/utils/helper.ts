import { useEffect, useState } from "react"
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
