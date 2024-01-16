import { FieldValues, Path, UseFormRegisterReturn } from "react-hook-form";

interface InputPropsType<T extends FieldValues> extends UseFormRegisterReturn {
  value: any;
  type: string;
  id: string;
  placeholder?: string;
  autoComplete?: "on" | "off";
  tabIndex?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  // onFocus와 onBlur는 UseFormRegisterReturn에 이미 포함되어 있으므로 제거 가능
}

interface InputStylePropsType {
  $LabelRequiredColor?: string;
}

export type { InputPropsType, InputStylePropsType };
