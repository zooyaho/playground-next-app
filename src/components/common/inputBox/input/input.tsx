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
  ...registerProps // 나머지 register 속성들을 여기에 포함
}: InputPropsType<T>) {
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
      {...registerProps} // register 속성들을 Input 요소에 전달
    />
  );
}

export default Input;
