import { OptionType } from '../../../interfacesTypes/Option';
import Styles from './MyOption.module.scss';

type OptionProps = {
  option: OptionType;
  onClick: (value: OptionType['value']) => void;
};
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
    >
      {title}
    </li>
  );
};
