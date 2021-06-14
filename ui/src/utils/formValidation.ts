import { useEffect, useState } from 'react'

type Value = string | number | null

interface IValidations {
  isEmpty: boolean,
  isEmail?: boolean,
}

const useValidation = (value: Value, validations: IValidations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [emailError, setEmailError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break
        case 'isEmail':
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
          break
      }
    }
  }, [value])

  useEffect(() => {
    if(isEmpty || emailError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, emailError])

  return {
    isEmpty,
    emailError,
    inputValid,
  }
}

export const useInput = (initialValue: Value, validations: IValidations): any => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e: any): void => {
    setValue(e.target.value)
  }

  const onBlur = (e: any): void => {
    setDirty(true)
  }

  const amountPlus = (): void => {
    setValue(+ value + 1)
  }

  return {
    value,
    onChange,
    onBlur,
    amountPlus,
    isDirty,
    ...valid,
  }
}
