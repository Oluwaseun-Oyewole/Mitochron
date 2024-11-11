import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

const Loader = () => {
  return (
    <div
      aria-live="polite"
      className="flex items-center justify-center h-screen"
    >
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  )
}

export default Loader
