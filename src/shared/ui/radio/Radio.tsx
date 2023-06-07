import radioStyles from './Radio.module.scss';
import { Props } from './type';

function Radio({ options, name, onChangeInput }: Props) {
  return (
    <div className={radioStyles.radio}>
      {options.map((option) => (
        <div className={radioStyles.item} key={option.id}>
          <input
            className={radioStyles.input}
            id={option.id}
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={option.defaultChecked}
            onChange={onChangeInput}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={radioStyles.label} htmlFor={option.id} />
          <h4>{option.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Radio;
