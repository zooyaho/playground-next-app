import * as Style from './inputStyle';
import { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
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
  rest,
}: // control,
InputPropsType<T>) {
  // TODO. disabled에 따른 스타일 적용
  return (
    <Style.Input
      type={type}
      id={id}
      value={value} // useController에서 제공하는 value 사용
      placeholder={placeholder}
      autoComplete={autoComplete}
      tabIndex={tabIndex}
      disabled={isDisabled}
      readOnly={isReadOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    />
  );
}

export default Input;
