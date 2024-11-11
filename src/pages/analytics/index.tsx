import { useEffect } from "react"
import { useGlobalStoreHook } from "../../hooks"

const Analytics = () => {
  const { scrollToTop } = useGlobalStoreHook()

  useEffect(() => {
    scrollToTop()
  }, [])
  return <div className="pl-5 md:pl-10 pr-5 md:pr-10">Analytics</div>
}

export default Analytics
