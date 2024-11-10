import { useGlobalStore } from "./../../store/index"

export function useGlobalStoreHook() {
  const { isOpen, toggle, scrollToTop, handleScroll, details, setDetails } =
    useGlobalStore((state) => state)
  return {
    isOpen,
    toggle,
    scrollToTop,
    handleScroll,
    details,
    setDetails,
  }
}
