import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import inputWithSelectStyles from './InputWithSelect.module.scss';
import { Props } from './type';

function InputWithSelect({
  inputName,
  inputValue,
  inputDisabled,
  inputNote,
  selectorDefaultValue,
  onChangeInput,
}: Props) {
  const [inputComponentValue, setInputComponentValue] = useState('');

  const validateInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const changedValue = value.replace(/,/g, '.');
    const regex = /^\d{0,10}(?:\.\d{0,18})?$/;

    if (regex.test(changedValue)) {
      if (changedValue !== '') {
        setInputComponentValue(changedValue);
        onChangeInput(event, changedValue);
      } else {
        setInputComponentValue(changedValue);
      }
    }
  };

  if (inputValue) {
    return (
      <div className={inputWithSelectStyles.wrapper}>
        <input
          className={inputWithSelectStyles.input}
          name={inputName}
          value={inputValue}
          disabled={inputDisabled}
          onChange={onChangeInput}
          placeholder="0"
        />
        <div className="select__label">
          <Image src="/icons/ETH.svg" width={20} height={20} alt={selectorDefaultValue} />
          <p>{selectorDefaultValue}</p>
        </div>
        {inputNote ? <span className={inputWithSelectStyles.span}>{inputNote}</span> : ''}
      </div>
    );
  }

  return (
    <div className={inputWithSelectStyles.wrapper}>
      <input
        className={inputWithSelectStyles.input}
        name={inputName}
        value={inputComponentValue}
        disabled={inputDisabled}
        onChange={validateInputChange}
        placeholder="0"
      />
      <div className="select__label">
        <Image src="/icons/ETH.svg" width={20} height={20} alt={selectorDefaultValue} />
        <p>{selectorDefaultValue}</p>
      </div>
      {inputNote ? <span className={inputWithSelectStyles.span}>{inputNote}</span> : ''}
    </div>
  );
}

export default InputWithSelect;
