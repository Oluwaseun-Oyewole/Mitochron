import { useEffect } from "react"
import { useGlobalStoreHook } from "../../hooks"

const Approval = () => {
  const { scrollToTop } = useGlobalStoreHook()

  useEffect(() => {
    scrollToTop()
  }, [])
  return <div className="pl-5 md:pl-10 pr-5 md:pr-10">Approval</div>
}

export default Approval
