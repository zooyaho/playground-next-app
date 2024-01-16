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
    hoookFormOnBlur();
  };

  const onChangeVisibility = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  return (
    <Style.Container>
      {labelValue && (
        <Style.Label htmlFor={id}>
          {labelValue}
          {isLabelRequired && (
            <Style.LabelRequiredIcon $LabelRequiredColor={LabelRequiredColor}>
              *
            </Style.LabelRequiredIcon>
          )}
        </Style.Label>
      )}
      <Style.InputWrapper
        className={`${error ? 'error' : ''} ${
          (fieldValue && fieldValue.length > 0) || isFocused ? 'active' : ''
        }`}
      >
        <Input
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
          fieldAttrs={rest}
        />
        {type === 'password' && (
          <Style.VisibilitySwitchBtn
            type="button"
            onClick={onChangeVisibility}
            tabIndex={-1}
          >
            {inputType === 'text' ? (
              <Style.VisibilityIcon />
            ) : (
              <Style.VisibilityOffIcon />
            )}
          </Style.VisibilitySwitchBtn>
        )}
      </Style.InputWrapper>
      <Style.InfoWrapper>
        <Style.InfoText className={error && 'error'}>
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
