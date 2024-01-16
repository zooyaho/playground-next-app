import * as Style from './labelInputStyle';
import { useState } from 'react';
import { useFormContext, FieldValues } from 'react-hook-form';
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
}: LabelInputPropsType<T>) {
  const { register, watch, formState: { errors } } = useFormContext();
  const error = errors[name];
  const fieldValue = watch(name);
  const registerProps = register(name);

  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);

  const onFocus = () => setIsFocused(true);
  // const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  //   setIsFocused(false);
  //   // 필요한 경우 추가 로직을 여기에 추가
  // };

  // 커스텀 로직과 register의 onBlur를 결합

  // 사용자 정의 onBlur 로직
  const handleCustomBlur = () => {
    setIsFocused(false);
    // 필요한 추가 로직
    return Promise.resolve(); // Promise<void> 반환
  };

  const onBlurCombined = async (e: React.FocusEvent<HTMLInputElement>) => {
    await registerProps.onBlur(e); // register의 onBlur 호출 (비동기 처리가 필요한 경우)
    return handleCustomBlur(); // 커스텀 로직 호출
  };

  // const onBlurHandle = (event: any) => {
  //   registerProps.onBlur(event); // register의 onBlur 호출
  //   setIsFocused(false); // 커스텀 로직 
  // };

  const onChangeVisibility = () => {
    setInputType(prevType => prevType === 'password' ? 'text' : 'password');
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
      <Style.InputWrapper className={`${error ? 'error' : ''} ${isFocused ? 'active' : ''}`}>
        <Input
          {...registerProps}
          type={inputType}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          tabIndex={tabIndex}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          onFocus={onFocus}
          onBlur={onBlurCombined}
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
        <Style.InfoText className={error ? 'error' : ''}>
          {String(error?.message)}
        </Style.InfoText>
        <Style.InfoText className={error ? 'error' : ''}>
          {/* {error ? error.message : ' '} */}
          {/* {error?.message ? error.message : infoText ? infoText : ''} */}
        </Style.InfoText>
        {maxLength && (
          <Style.LengthLabel>
            {fieldValue ? fieldValue.length : 0}/{maxLength}
          </Style.LengthLabel>
        )}
      </Style.InfoWrapper>
    </Style.Container>
  );
}

export default LabelInput;
