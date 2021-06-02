import React, { useState } from 'react'
import { StyledForm } from './styles'
import { Button } from 'components/Button'
import { PlusOutlined } from '@ant-design/icons'
import { Select, Form } from 'antd'
import { lattices } from 'modules/mainPage/lattices.service'

const { Option } = Select

export const FormCmp: React.FC = () => {
  const [amount, setAmount] = useState(0)
  const hendel = (event) => {
    event.preventDefault()
    setAmount(amount + 1)
  }
  return (
    <StyledForm >
      <div className='form__container'>
        <Form.Item name='lattices' rules={[
          {
            required: true,
            message: 'Пожалуйста, выберите тип решетки!',
          }]}>
          <Select className='form__lattices' placeholder='Тип решетки' bordered={false} allowClear>
            {lattices.map(({name}) => <Option key={name} value={name}>{name}</Option>)}
          </Select>
        </Form.Item>

        <Form.Item name='amount' rules={[
          {
            required: true,
            message: 'Введите количество!',
          }]}>
          <input className='form__item' type='number' value={amount} min={1} placeholder='шт' />
        </Form.Item>

        <button className='form__plus' onClick={hendel}><PlusOutlined/></button>
      </div>

      <p className='form__title'>Контакные данные</p>

      <div className='form__data'>
        <Form.Item name='fullName' rules={[
          {
            required: true,
            message: 'Пожалуйста, введите как вас зовут!',
          }]}>
          <input className='form__item' type='text' placeholder='ФИО' />
        </Form.Item>

        <Form.Item name='address'>
          <input className='form__item' type='text' placeholder='Адрес доставки' />
        </Form.Item>

        <Form.Item name='phone' rules={[
          {
            required: true,
            message: 'Пожалуйста, введите номер телефона!',
          },
        ]}>
          <input className='form__item' type='tel' placeholder='Телефон' pattern='^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$'/>
        </Form.Item>

        <Form.Item name='email' rules={[
          {
            type: 'email',
            message: 'Пожалуйста, введите правильный E-mail!',
          },
          {
            required: true,
            message: 'Пожалуйста, введите E-mail!',
          },
        ]}>
          <input className='form__item' type='email' placeholder='E-mail' />
        </Form.Item>
      </div>

      <Button className='form_submit' type={'submit'}>ОФОРМИТЬ ЗАКАЗ</Button>
    </StyledForm>
  )
}
