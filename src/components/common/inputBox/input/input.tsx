import * as S from './inputStyle';
import { useState } from 'react';
import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  FieldValues,
  Path,
} from 'react-hook-form';

interface InputPropsType<T extends FieldValues> {
  name: Path<T>;
  type: string;
  id: string;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  tabIndex?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  hasError?: boolean;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  // errors?: FieldErrors; // 에러 문구 필요할 때 사용
}

function Input<T extends FieldValues>({
  name,
  type = 'text',
  id,
  placeholder,
  autoComplete = 'off',
  tabIndex,
  isDisabled = false,
  isReadOnly,
  hasError,
  register,
  watch,
}: InputPropsType<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const { ref, onBlur: hoookFormOnBlur, ...rest } = register(name);
  const fieldValue = watch(name); // 필드 값 변화에 즉시 반영된 값

  const onFocus = () => setIsFocused(true);
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    /* 
    react-hook-form의 onBlur핸들러를 호출하여 사용자가 필드에서 포커스를 벗어날 때, 
    필드의 유효성 검사와 필드 상태를 업데이트함
    */
    hoookFormOnBlur(event);
  };

  const className = [
    hasError ? 'error' : '',
    (fieldValue && fieldValue.length > 0) || isFocused ? 'active' : '',
  ]
    .join(' ')
    .trim();

  // TODO. disabled 처리 확인
  return (
    <S.InputWapper>
      <S.Label>라벨</S.Label>
      <S.Input
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        tabIndex={tabIndex}
        disabled={isDisabled}
        readOnly={isReadOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        {...rest}
      />
      <S.InfoWrapper>
        {/* error ? error.message : info.message*/}
        <S.InfoText>설명</S.InfoText>
        <S.TextCounter>13/20</S.TextCounter>
      </S.InfoWrapper>
    </S.InputWapper>
  );
}

export default Input;
