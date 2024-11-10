import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface Details {
  email: string
  username: string
  location: string
  departments: number
  units: number
  socials: Array<string>
}
interface GlobalStore {
  isOpen: boolean
  toggle: () => void
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  scrollToTop: VoidFunction
  details: Details
  setDetails: (details: Details) => void
}

export const useGlobalStore = create(
  immer<GlobalStore>((set) => ({
    isOpen: false,
    toggle: () =>
      set((state) => {
        state.isOpen = !state.isOpen
      }),
    details: {
      email: "venturaBrody@co.ng",
      location: "Lagos, Nigeria",
      username: "Ventura Brody",
      departments: 0,
      units: 0,
      socials: ["https://www.LinkedIn"],
    },
    scrollToTop() {
      set(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    },
    handleScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
      set(() => {
        e.preventDefault()
        const href = e.currentTarget.href
        const targetId = href.replace(/.*#/, "")
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      })
    },
    setDetails(details) {
      set((state) => {
        state.details = { ...state.details, ...details }
      })
    },
  }))
)
