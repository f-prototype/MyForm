import { OptionType } from './Option';

export type OptionProps = {
  option: OptionType;
  onClick: (value: OptionType['value']) => void;
};
