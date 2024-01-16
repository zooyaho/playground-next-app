import * as Style from './inputStyle';
import { FieldValues } from 'react-hook-form';
import { InputPropsType } from './inputType';

function Input<T extends FieldValues>({
  value,
  type = 'text',
  id,
  placeholder,
  autoComplete = 'off',
  tabIndex,
  isDisabled = false,
  isReadOnly,
  onFocus,
  onBlur,
  fieldAttrs,
}: InputPropsType<T>) {
  // TODO. disabled에 따른 스타일 적용
  return (
    <Style.Input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      tabIndex={tabIndex}
      disabled={isDisabled}
      readOnly={isReadOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      {...fieldAttrs}
    />
  );
}

export default Input;
