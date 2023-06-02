import { ChangeEvent, useState } from 'react';

import InputWithNoteStyles from './InputWithNote.module.scss';
import { Props } from './type';

function InputWithNote({ inputName, placeholder, note, onChangeInput }: Props) {
  const [inputValue, setInputValue] = useState('');

  const validateInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const changedValue = value.replace(/,/g, '.');
    const regex = /^\d{0,10}(?:\.\d{0,18})?$/;

    if (regex.test(changedValue)) {
      if (changedValue !== '') {
        setInputValue(changedValue);
        onChangeInput(event, changedValue);
      } else {
        setInputValue(changedValue);
      }
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={InputWithNoteStyles.label}>
      <div>
        <input
          className={InputWithNoteStyles.input}
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          onChange={validateInputChange}
        />
        <span>{note}</span>
      </div>
    </label>
  );
}

export default InputWithNote;
