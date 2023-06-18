import { OptionType } from '../../../interfacesTypes/Option';
import { OptionProps } from '../../../interfacesTypes/OptionProps';
import Styles from './MyOption.module.scss';

export const Option = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;

  const handleClick =
    (
      clickedValue: OptionType['value']
    ): React.MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <li
      className={Styles.option}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      id={`field-sex-option-${value}`}
    >
      {title}
    </li>
  );
};
