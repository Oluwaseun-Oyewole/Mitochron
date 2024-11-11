import classNames from "classnames"
import { type ButtonHTMLAttributes } from "react"

type VariantType = "default" | "secondary" | "form"
type IProps = {
  isLoading?: boolean
  variant?: VariantType
} & ButtonHTMLAttributes<HTMLButtonElement>
export default function Button({
  children,
  className,
  variant = "default",
  isLoading = false,
  ...rest
}: IProps) {
  const customButtonStyles = (variant: VariantType) => {
    switch (variant) {
      case "default":
        return "bg-transparent px-7 py-3 rounded-lg"
      case "secondary":
        return "bg-textColor text-black border-[1px] border-gray-200 px-7 py-4 rounded-xl hover:bg-gray-100"
      case "form":
        return "bg-secondary-100 text-white py-4 px-7 rounded-xl hover:opacity-90"
      default:
        return null
    }
  }

  return (
    <button
      {...rest}
      className={classNames(
        `w-full flex items-center justify-center gap-4 font-light text-textColor transition-all duration-700 ease-in-out hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-80`,
        customButtonStyles(variant),
        className
      )}
    >
      {isLoading && <p>Loading....</p>}
      {children}
    </button>
  )
}
