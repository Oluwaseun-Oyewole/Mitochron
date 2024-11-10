import { Modal } from "antd"
import classNames from "classnames"
import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useImperativeHandle,
  useState,
} from "react"
import { RiCloseLine } from "react-icons/ri"
import { useMediaQuery } from "../../../utils/helper"

type Props = {}

type OpenProps = {
  content: ReactNode
  title?: string | ReactNode
  contentClassName?: string
  headerWrapperClassName?: string
  hideCancelButton?: boolean
}

export type IModalWrapper = {
  open: (prop: OpenProps) => void
  close: () => void
}

const defaultProps: OpenProps = {
  content: null,
}

const ModalWrapper: ForwardRefRenderFunction<IModalWrapper, Props> = (
  // eslint-disable-next-line no-empty-pattern
  {},
  ref
) => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<OpenProps>(defaultProps)
  const [contentClassName, setContentClassName] = useState<string>("")
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleCancel = () => {
    setOpen(false)
    setContent(defaultProps)
    setContentClassName("")
  }

  const openModal = ({ contentClassName, ...prop }: OpenProps) => {
    setContent({ ...prop })
    setOpen(true)
    setContentClassName(contentClassName ?? "")
  }

  useImperativeHandle(ref, () => ({
    close() {
      handleCancel()
    },
    open(node) {
      openModal(node)
    },
  }))

  const modalClassName = classNames({
    "[&>.ant-modal-content]": true,
    "rounded-xl": true,
    "w-full": true,
    "lg:max-w-[710px]": true,
    "top-[unset]": !isMobile,
    "bottom-0": isMobile,
    "overflow-hidden": true,
  })

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      closable={false}
      className={classNames(
        modalClassName,
        "[&>.ant-modal-content]:!p-0 font-roboto"
      )}
      footer={null}
      destroyOnClose
      centered
    >
      <div
        className={classNames(
          content.headerWrapperClassName ?? "",
          `px-5 pt-[9px] pb-[18px] overflow-hidden flex justify-between items-center rounded-t-xl`
        )}
      >
        {content.title ? <p>{content.title}</p> : <div />}
        {!content.hideCancelButton && (
          <div
            role="button"
            onClick={handleCancel}
            className="ml-3, hover:opacity-90 cursor-pointer h-[36px] w-[36px] rounded-full justify-center items-center flex text-2xl text-[#334155] bg-[#F2F2F7]"
          >
            <RiCloseLine />
          </div>
        )}
      </div>
      <div className={classNames("px-5 pb-6", contentClassName)}>
        {content.content}
      </div>
    </Modal>
  )
}

export default forwardRef(ModalWrapper)
