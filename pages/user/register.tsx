import { Button, Card, Checkbox, Form, Input, Modal, NavBar, Result, SafeArea, Space, Toast } from 'antd-mobile'
import axios from 'axios'
import copy from 'copy-to-clipboard'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

import Pendant from '../../components/common/Pendant'
import Header from '../../components/v2/Header'
import SendBtn from '../../components/v5/SendBtn/SendBtn'
import { passwordValidator, phoneNumberValidator } from '../../utils/check'

const AGREEMENT_LINK = 'https://www.shopastro.com/agreement'

type FormValues = { password?: string; phoneNum?: string; verifyCode?: string }

const Register = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [agreement, setAgreement] = useState(false)
  const [formValue, setFormValue] = useState<FormValues>({})
  const apiDomain = useRef('//sys.api.ishopastro.com')

  const { phoneNum = '' } = router.query

  useEffect(() => {
    if (/beta/.test(location.host)) {
      apiDomain.current = '//sys.api.beta.ishopastro.com'
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const finalPhoneNum = Buffer.from(phoneNum.toString(), 'base64').toString()
        setFormValue({ ...formValue, phoneNum: finalPhoneNum })
        form.setFieldValue('phoneNum', finalPhoneNum)
        await phoneNumberValidator(undefined, finalPhoneNum.toString())
        await axios.get(`${apiDomain.current}/common/v1/verify-phone.json?phoneNum=${finalPhoneNum.toString()}`)
      } catch (e) {}
    })()
  }, [form, phoneNum])

  const handleRegister = async (values: FormValues) => {
    setLoading(true)
    try {
      const res = await axios.post(`${apiDomain.current}/common/v1/register.json`, {
        password: values.password,
        phoneNum: values.phoneNum,
        region: '+86',
        verifyCode: values.verifyCode,
        origin: 'mobile'
      })
      if (res.data) {
        if (res.data.success) {
          setSuccess(true)
        } else {
          Toast.show({
            duration: 3000,
            content: res.data.errMsg ?? <>服务器或网络异常, 请稍后重试.</>
          })
        }
      } else {
        Toast.show({
          duration: 3000,
          content: <>服务器或网络异常, 请稍后重试.</>
        })
      }
      setLoading(false)
    } catch (e) {
      setLoading(false)
      Toast.show({
        duration: 3000,
        content: <>服务器或网络异常, 请稍后重试.</>
      })
    }
  }
  const onFinish = async (values: FormValues) => {
    if (!agreement) {
      //@ts-ignore
      document.activeElement?.blur()
      window.scrollTo(0, 0)
      Modal.show({
        title: <>用户协议及隐私保护</>,
        closeOnAction: true,
        content: (
          <div className={'text-[12px] text-center'}>
            我已阅读并同意
            <a href={AGREEMENT_LINK} target={'_blank'} rel="noreferrer">
              《shopastro用户协议》
            </a>
          </div>
        ),
        actions: [
          {
            key: 'agree',
            text: '同意并注册',
            primary: true,
            onClick: () => {
              setAgreement(true)
              handleRegister(values)
            }
          },
          {
            key: 'cancel',
            text: '取消'
          }
        ]
      })
      return
    }
    await handleRegister(values)
  }

  return (
    <>
      <Header
        title="shopastro 星盘跨境，B2B数智化的全链路产品能力服务外贸品牌出海！"
        description="shopastro, 星盘跨境, 品牌出海一站式数智化解决方案；星盘 B2B, 数智化助力外贸企业高效出海；提供品牌认知与建设、全链路数字化询盘跟进和管理的产品和服务, 支持各类批发场景, 通过全路径洞察并挖掘访客意向与商机, 帮助外贸B2B商家在线上高效开展业务、获取高质量询盘--shopastro星盘跨境"
        keywords="B2B数智化, 智能询盘, 意向洞察, B 类 CRM, chat与询盘互通, 一件代发供货, 小额批发, 免费试用, 企业客户全生命周期跟踪, 打通1688商品池,支持星盘客户与Shopify店主的跨境交易"
      />
      <NavBar
        onBack={() => {
          router.back()
        }}
      ></NavBar>
      {success ? (
        <>
          <Result
            className="text-[#29A72F]"
            style={{
              //@ts-ignore
              '--adm-color-primary': '#29A72F'
            }}
            status="success"
            title="注册成功"
            description="为了您更好的浏览体验，请复制以下链接，前往PC端使用"
          />
          <Card bodyClassName={'bg-[red] h-[140px] bg-[#F7F9FE] flex flex-col justify-between'}>
            <div className={'text-center text-[#18214D] text-[16px] font-medium'}>链接地址</div>
            <div className="text-center text-[#909EB0]">https://sys.admin.ishopastro.com/admin/user/login</div>
            <Space justify="center" block>
              <Button
                onClick={() => {
                  copy('https://sys.admin.ishopastro.com/admin/user/login')
                  Toast.show({
                    duration: 2000,
                    content: '复制成功'
                  })
                }}
                size={'small'}
              >
                复制链接
              </Button>
            </Space>
          </Card>
        </>
      ) : (
        <>
          <div className={'flex justify-center mt-[44px] mb-[40px]'}>
            <Image
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg"
              alt="logo"
              width={128}
              height={24}
            />
          </div>
          <div className="flex justify-center text-[#004DD1] text-[24px] mb-[32px] font-semibold">
            仅差一步，即可获取账号
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            onValuesChange={(values: FormValues) => {
              setFormValue({ ...values })
            }}
            layout="horizontal"
            footer={
              <Button block type="submit" color="primary" size="large" loading={loading} loadingText={'注册中'}>
                注册
              </Button>
            }
          >
            <Form.Item
              name="phoneNum"
              rules={[
                { required: true, message: '请输入手机号码' },
                { len: 11, message: '手机长度要11位' },
                { validator: phoneNumberValidator }
              ]}
              validateTrigger={'onChange'}
              validateFirst={true}
            >
              <Input placeholder="请输入手机号码" type={'number'} />
            </Form.Item>
            <Form.Item
              extra={<SendBtn phoneNum={formValue?.phoneNum || ''} />}
              required
              name="verifyCode"
              validateTrigger="onChange"
              validateFirst={true}
              rules={[
                { required: true, message: '请输入验证码' },
                { len: 4, message: '有效验证码为4位的数字。' }
              ]}
            >
              <Input placeholder="请输入验证码" maxLength={4} />
            </Form.Item>
            <Form.Item
              name="password"
              validateTrigger="onChange"
              validateFirst={true}
              rules={[{ required: true, message: '请输入密码' }, { validator: passwordValidator }]}
            >
              <Input placeholder="请输入密码" clearable type="password" />
            </Form.Item>
            <Form.Item>
              <Checkbox
                style={{
                  '--icon-size': '22px'
                }}
                checked={agreement}
                onChange={(value) => {
                  setAgreement(value)
                }}
              >
                <span className="text-[12px] leading-[25px]">
                  阅读并同意
                  <a href={AGREEMENT_LINK} target={'_blank'} rel="noreferrer">
                    《shopastro 用户协议》
                  </a>
                </span>
              </Checkbox>
            </Form.Item>
          </Form>
        </>
      )}
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position="bottom" />
      </div>
      <Pendant />
    </>
  )
}

export default Register