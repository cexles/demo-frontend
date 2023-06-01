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

export default InputWithSelect;
