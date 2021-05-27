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
      <Form.Item name='lattices' rules={[{required: true, message: 'Пожалуйста, выберите тип решетки!'}]}>
        <Select className='form__item' placeholder='Тип решетки' bordered={false} allowClear>
          {lattices.map(({name}) => <Option key={name} value={name}>{name}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item name='amount' rules={[{required: true, message: 'Введите количество!'}]}>
        <input className='form__item' type='number' value={amount} min={1} step={1} placeholder='шт' pattern='^[0-9]+$'/>
      </Form.Item>

      <button className='form__plus' onClick={hendel}><PlusOutlined/></button>

      {/*<input className='form__item' type='text' placeholder='ФИО' required />
        <input className='form__item form_tel' type='tel' placeholder='80(33)333-33-33'
               pattern='^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$'/>*/
      }
      <Form.Item className='form_text' name='data'>
        <textarea placeholder={'Дополнительные данные*\n(Название компании, e-mail, адрес)'}/>
      </Form.Item>

      <Button className='form_submit' type={'submit'}>ОФОРМИТЬ ЗАКАЗ</Button>
    </StyledForm>
  )
}
