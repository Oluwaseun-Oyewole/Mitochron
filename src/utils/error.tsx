export const handleFetchError = (
  message?: string,
  defaultMessage = "Sorry, an error occurred."
) => {
  // use toastify or other alternatives to handle error response
  alert(message ?? defaultMessage)
  // Toastify.error(message ?? defaultMessage)
}
