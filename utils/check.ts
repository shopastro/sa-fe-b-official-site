export function isValidPhoneNumber(phoneNumber: string, regionCode: string): boolean {
  if (!phoneNumber || !regionCode) {
    return false
  }

  if (regionCode === '+86') {
    return /^(1|2)[3|4|5|6|7|8|9][0-9]{9}$/.test(phoneNumber)
  }

  return true
}

export function phoneNumberValidator(_: any, value: string): any {
  const phoneNumRegex = /^(1|2)(3|4|5|6|7|8|9)\d{9}$/
  return phoneNumRegex.test(value) ? Promise.resolve() : Promise.reject(new Error('请输入正确格式的手机号码'))
}

export function passwordValidator(_: any, value: string): any {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@.$!%#?&]{8,20}$/
  return passwordRegex.test(value)
    ? Promise.resolve()
    : Promise.reject(new Error('密码长度请大于等于8位，并包含数字及大小写字母'))
}
