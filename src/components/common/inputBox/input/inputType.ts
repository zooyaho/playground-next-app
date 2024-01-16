import { FieldValues, Path, RefCallBack } from 'react-hook-form';

interface HookFormFieldObjType<T extends FieldValues> {
  onChange: (...event: any[]) => void;
  disabled?: boolean | undefined;
  name: Path<T>;
  ref: RefCallBack;
}

interface InputPropsType<T extends FieldValues> {
  value: any;
  type: string;
  id: string;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  tabIndex?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  fieldAttrs?: HookFormFieldObjType<T>;
}

interface InputStylePropsType {
  $LabelRequiredColor?: string;
}

export type { InputPropsType, InputStylePropsType };
