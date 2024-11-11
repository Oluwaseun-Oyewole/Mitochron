import classNames from "classnames"
import React, { useId } from "react"

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  containerClassName?: string
  labelClassName?: string
}

function CustomInput({
  label,
  type,
  name,
  className,
  containerClassName,
  labelClassName,
  ...props
}: props) {
  const id = useId()
  return (
    <div className={classNames("", containerClassName)} role="group">
      {label && (
        <label
          className={classNames("", labelClassName)}
          htmlFor={`${id}-${name ? name : "...."}`}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={classNames(
          "mt-3 bg-gray-100 w-full h-[55px] outline-none border-none px-6 rounded-lg disabled:cursor-not-allowed",
          className
        )}
        aria-describedby={name}
        name={name}
        id={`${id}-${name ? name : "..."}`}
        type={type ?? "text"}
      />
    </div>
  )
}

export default CustomInput
