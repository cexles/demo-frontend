export type Props = {
  inputName: string;
  inputValue?: string;
  inputDisabled: boolean;
  selectorName?: string;
  selectorDefaultValue: string;
  onChangeInput: (event) => void;
};
