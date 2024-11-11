import { Select, SelectProps } from "antd"
import { ReactNode } from "react"

const AntSelectWrapper = ({
  formatOptions,
  placeholder,
  onChange,
  label,
}: {
  formatOptions: ReactNode
  placeholder: string
  label?: string
  onChange: (e: string) => void
} & SelectProps) => {
  const customStyles: SelectProps["style"] = {
    width: "100%",
    height: 55,
    backgroundColor: "#EDEEEA",
    marginTop: 8,
    paddingLeft: 6,
  }

  return (
    <div role="group" aria-labelledby={`${label}-label`}>
      <label id={`${label}-label`} htmlFor={label} className="text-small pb-5">
        {label}
      </label>
      <Select
        onChange={onChange}
        optionLabelProp="label"
        style={customStyles}
        placeholder={placeholder}
        className="custom-select"
      >
        {formatOptions}
      </Select>
    </div>
  )
}

export default AntSelectWrapper
