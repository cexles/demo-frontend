export type Props = {
  inputName: string;
  inputValue?: string;
  inputDisabled: boolean;
  inputNote?: string;
  selectorName: string;
  selectorDefaultValue: string;
  onChangeSelect: (name, value) => void;
  onChangeInput: (event, value?) => void;
};
