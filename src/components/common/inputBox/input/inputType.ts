interface InputPropsType {
  type: string;
  id: string;
  className?: string;
  value: string;
  setInputValue: (val: string, inputKey?: string) => void;
  placeholder?: string;
  maxLength?: number;
  tabIndex?: number;
  $isError?: boolean;
  autocomplete?: string;
  disabled?: boolean;
  setIsFocused?: (val: boolean) => void;
  isReadOnly?: boolean;
  setIsReadOnly?: (val: boolean) => void;
  onEnter?: () => void;
  checkIsValid?: (val: string) => void;
  inputKey?: string;
  _onChangeModalVisible?: () => void | undefined;
}

interface InputStylePropsType {
  $isError?: boolean;
  $isFocused?: boolean;
}

export type { InputPropsType, InputStylePropsType };
