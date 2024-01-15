import * as Style from './labelInputStyle';
import { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { LabelInputPropsType } from './labelInputType';
import Input from '../input';

function LabelInput<T extends FieldValues>({
  name,
  type,
  id,
  placeholder,
  infoText,
  maxLength,
  labelValue,
  isLabelRequired,
  LabelRequiredColor,
  autoComplete = 'off',
  tabIndex,
  isDisabled = false,
  isReadOnly,
  control,
}: LabelInputPropsType<T>) {
  const {
    field: { onBlur: hoookFormOnBlur, value: fieldValue, ...rest },
    fieldState: { error },
  } = useController({ name, control }); // useController를 사용하여 필드 상태 관리

  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => {
    setIsFocused(false);
    /* 
    react-hook-form의 onBlur핸들러를 호출하여 사용자가 필드에서 포커스를 벗어날 때, 
    필드의 유효성 검사와 필드 상태를 업데이트함
    */
    hoookFormOnBlur();
  };

  const onChangeVisibility = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  const className = [
    error ? 'error' : '',
    (fieldValue && fieldValue.length > 0) || isFocused ? 'active' : '',
  ]
    .join(' ')
    .trim();

  // TODO. disabled에 따른 스타일 적용
  return (
    <Style.Container>
      {labelValue && (
        <Style.Label htmlFor={id}>
          {labelValue}
          {isLabelRequired && (
            <Style.LabelRequired $LabelRequiredColor={LabelRequiredColor}>
              *
            </Style.LabelRequired>
          )}
        </Style.Label>
      )}
      <Style.InputWrapper className={className}>
        <Input
          name={name}
          value={fieldValue}
          type={inputType}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          tabIndex={tabIndex}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          rest={rest}
        />
        {type === 'password' && (
          <Style.VisibilitySwitchBtn onClick={onChangeVisibility} tabIndex={-1}>
            {inputType === 'text' ? (
              // <Style.VisibilityIcon />
              <p>hide</p>
            ) : (
              // <Style.VisibilityOffIcon />
              <p>show</p>
            )}
          </Style.VisibilitySwitchBtn>
        )}
      </Style.InputWrapper>
      <Style.InfoWrapper>
        <Style.InfoText>
          {error ? error.message : infoText ? infoText : ''}
        </Style.InfoText>
        {maxLength && (
          <Style.LengthLabel>
            {fieldValue ? fieldValue.length : '0'}/{maxLength}
          </Style.LengthLabel>
        )}
      </Style.InfoWrapper>
    </Style.Container>
  );
}

export default LabelInput;
