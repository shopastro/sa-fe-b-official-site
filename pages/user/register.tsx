import { Button, Card, Checkbox, Form, Input, Modal, NavBar, Result, SafeArea, Space, Toast } from 'antd-mobile'
import axios from 'axios'
import copy from 'copy-to-clipboard'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Pendant from '../../components/common/Pendant'
import Header from '../../components/v2/Header'
import { passwordValidator, phoneNumberValidator } from '../../utils/check'

const prodUrl = '//sys.api.ishopastro.com/common/v1/register.json'
const betaUrl = '//sys.api.beta.ishopastro.com/common/v1/register.json'

const AGREEMENT_LINK = 'https://www.shopastro.com/agreement'

const Register = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [agreement, setAgreement] = useState(false)

  const { phoneNum = '' } = router.query

  useEffect(() => {
    form.setFieldValue('phoneNum', phoneNum)
    ;(async () => {
      try {
        await phoneNumberValidator(undefined, phoneNum.toString())
        // TODO: 静默发送验证手机号是否重复的请求.用于服务端手机号的收集
        console.log('TODO: 静默发送验证手机号是否重复的请求.用于服务端手机号的收集')
      } catch (e) {}
    })()
  }, [form, phoneNum])

  const handleRegister = async () => {
    setLoading(true)
    const url = /beta/.test(location.host) ? betaUrl : prodUrl
    try {
      const res = await axios.post(url, {
        password: 'Hello1234',
        phoneNum: '13888888234',
        region: '+86',
        verifyCode: '2578',
        origin: 'mobile'
      })
      setLoading(false)
      setSuccess(true)
    } catch (e) {
      setLoading(false)
    }
  }
  const onFinish = async (values: any) => {
    console.log(values)
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
              handleRegister()
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
    await handleRegister()
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
          <div className={'flex justify-center mb-[40px]'}>
            <Image
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/dark-logo.svg"
              alt="logo"
              width={220}
              height={40}
            />
          </div>
          <div className="flex justify-center text-[#004DD1] text-[24px] mb-[32px] font-semibold">
            仅差一步，即可获取账号
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            layout="horizontal"
            mode="card"
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
              extra={<a>发送验证码</a>}
              required
              name="verificationCode"
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
          </Form>
          <Form style={{ '--border-bottom': 'none', '--border-top': 'none' }}>
            <Form.Item>
              <Checkbox
                checked={agreement}
                onChange={(value) => {
                  setAgreement(value)
                }}
              >
                <span className="text-[12px] lead-[18px]">
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
