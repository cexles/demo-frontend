export type Props = {
  inputName: string;
  inputValue?: string;
  inputDisabled: boolean;
  inputNote?: string;
  selectorName?: string;
  selectorDefaultValue: string;
  onChangeInput: (event, value?) => void;
};
