type List = {
  maxLength?: number
  name: string
  placeholder: string
  require?: boolean
  label: string
  type?: 'text' | 'textarea' | 'textarea' | 'select'
}

export const list: List[] = [
  {
    maxLength: 64,
    name: 'username',
    placeholder: '请输入姓名（必填）',
    require: true,
    label: '您的姓名',
  },
  {
    maxLength: 16,
    name: 'phoneNum',
    placeholder: '请输入手机号码（必填）',
    require: true,
    label: '联系手机',
  },
  {
    maxLength: 64,
    name: 'company',
    placeholder: '请输入公司名称（选填）',
    label: '公司名称',
  },
  {
    maxLength: 64,
    name: 'city',
    placeholder: '请输入所在城市（选填）',
    label: '所在城市',
  },

  {
    maxLength: 64,
    name: 'experience',
    placeholder: '请选择出海经验（必填）',
    type: 'select',
    label: '出海经验',
    require: true,
  },
  {
    maxLength: 255,
    name: 'message',
    placeholder: '其他出海经验，请在此输入（选填）',
    type: 'textarea',
    label: '',
  },
]
