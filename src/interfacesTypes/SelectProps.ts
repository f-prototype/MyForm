import { OptionType } from './Option';

export type SelectProps = {
  selected: OptionType | null;
  options: OptionType[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  status?: 'default' | 'invalid';
  onChange?: (selected: OptionType['value']) => void;
  onClose?: () => void;
};
