export type Props = {
  options: RadioOption[];
  name: string;
  onChangeInput: (event) => void;
};

type RadioOption = {
  id: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
};
