export type Props = {
  options: RadioOption[];
  name: string;
  onChangeInput: (event, value?) => void;
};

type RadioOption = {
  id: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
};
