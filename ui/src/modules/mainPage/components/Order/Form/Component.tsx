import React from 'react'
// @ts-ignore
import { Button } from 'components/Button'
// @ts-ignore
import { useInput } from 'utils/formValidation'
import { lattices } from '../../../lattices.service'
import { StyledForm } from './styles'
import { PlusOutlined } from '@ant-design/icons'

export const FormCmp: React.FC = () => {
  const fullName = useInput('', {isEmpty: true})
  const address = useInput('', {isEmpty: true})
  const phone = useInput('', {isEmpty: true})
  const email = useInput('', {isEmpty: true, isEmail: true})
  const amount = useInput(null, {isEmpty: true})

  return (
    <StyledForm action="mail.php" method="POST">
      <div style={{marginBottom: '3rem'}}>
        <div className='form__container'>
          <select className='form__lattices form__item' name='lattices'>
            <option key='Тип решетки' selected disabled hidden>Тип решетки</option>
            {lattices.map(({name}) => <option key={name} value={name}>{name}</option>)}
          </select>

          <input className='form__amount form__item' name='amount' type='number' min={1} placeholder='шт'
            value={amount.value}
            onChange={e => amount.onChange(e)}
            onBlur={e => amount.onBlur(e)}
          />
          <button type='button' className='form__plus' onClick={amount.amountPlus}><PlusOutlined/></button>
        </div>
        {(amount.isDirty && amount.isEmpty) && <div className='form__error'>Пожалуйста, выберите тип решетки и количество.</div>}
      </div>

      <p className='form__title'>Контакные данные</p>
      <div className='form__data'>
        <input className='form__item' name='fullName' type='text' placeholder='ФИО'
          value={fullName.value}
          onChange={e => fullName.onChange(e)}
          onBlur={e => fullName.onBlur(e)}
        />
        {(fullName.isDirty && fullName.isEmpty) && <div className='form__error'>Пожалуйста, введите ваше имя.</div>}

        <input className='form__item' name='address' type='text' placeholder='Адрес доставки'
          value={address.value}
          onChange={e => address.onChange(e)}
          onBlur={e => address.onBlur(e)}
        />
        {(address.isDirty && address.isEmpty) && <div className='form__error'>Пожалуйста, введите адрес доставки.</div>}

        <input className='form__item' name='phone' type='tel' placeholder='Телефон'
          pattern='^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$'
          value={phone.value}
          onChange={e => phone.onChange(e)}
          onBlur={e => phone.onBlur(e)}
        />

        <input className='form__item' name='email' type='email' placeholder='E-mail'
          value={email.value}
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
        />
        {((email.isEmpty && phone.isEmpty) && (phone.isDirty && email.isDirty))
        && <div className='form__error'>Заполните хотя бы одно контактное поле для связи с вами.</div>}
      </div>

      <Button
        disabled={!fullName.inputValid || !address.inputValid || !(phone.inputValid || email.inputValid) || !amount.inputValid}
        className='form_submit'
        type='submit'
      >
        ОФОРМИТЬ ЗАКАЗ
      </Button>
    </StyledForm>
  )
}
