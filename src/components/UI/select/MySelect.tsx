import { useState, useEffect, useRef } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import Styles from './MySelect.module.scss';
import { Option } from './MyOption';
import { OptionType } from '../../../interfacesTypes/Option';
import { SelectProps } from '../../../interfacesTypes/SelectProps';

export const MySelect = (props: SelectProps) => {
  const {
    mode = 'rows',
    options,
    placeholder,
    status = 'default',
    selected,
    onChange,
    onClose,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  const handleOptionClick = (value: OptionType['value']) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: React.MouseEventHandler<
    HTMLDivElement
  > = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <label className={Styles.label}>
      <p>Пол</p>
      <div
        className={Styles.selectWrapper}
        ref={rootRef}
        data-is-active={isOpen}
        data-mode={mode}
      >
        <div className={Styles.arrow} onClick={handlePlaceHolderClick}>
          <SlArrowDown />
        </div>
        <div
          className={Styles.placeholder}
          data-status={status}
          data-selected={!!selected?.value}
          onClick={handlePlaceHolderClick}
          role="button"
          tabIndex={0}
          id="field-sex"
        >
          {selected?.title || placeholder}
        </div>
        {isOpen && (
          <ul className={Styles.select}>
            {options.map((option) => (
              <Option
                key={option.value}
                option={option}
                onClick={handleOptionClick}
              />
            ))}
          </ul>
        )}
      </div>
    </label>
  );
};
