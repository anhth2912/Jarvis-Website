export const formatPhoneNumber = (str: string): string => {
  if (!str) {
    return ''
  }

  const phoneNumberformat = str.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3')
  return phoneNumberformat
}
