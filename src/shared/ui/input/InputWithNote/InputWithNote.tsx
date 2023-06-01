import InputWithNoteStyles from './InputWithNote.module.scss';
import { Props } from './type';

function InputWithNote({ inputName, placeholder, note, onChangeInput }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={InputWithNoteStyles.label}>
      <div>
        <input
          className={InputWithNoteStyles.input}
          name={inputName}
          placeholder={placeholder}
          onChange={onChangeInput}
        />
        <span>{note}</span>
      </div>
    </label>
  );
}

export default InputWithNote;
