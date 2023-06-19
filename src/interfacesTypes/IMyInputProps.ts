type formNameTypes =
  | 'number'
  | 'email'
  | 'nickname'
  | 'name'
  | 'sername'
  | 'sex'
  | 'advantages'
  | string;

export interface IMyInputProps {
  id?: string;
  name: formNameTypes;
  pattern?: RegExp;
  required: boolean;
  max?: number;
  text?: string;
  value?: string;
  onChange?: (name: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  reg: any;
  errors: {
    [key: string]: any;
  };
  children?: any;
}
