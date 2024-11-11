const FormError = ({ error }: { error: string }) => {
  return (
    <p id={`${error}-error`} role="alert" className="text-red-500">
      {error}
    </p>
  )
}

export default FormError
