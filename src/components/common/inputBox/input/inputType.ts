import { FieldValues, Path, Control } from 'react-hook-form';
interface InputPropsType<T extends FieldValues> {
  name: Path<T>;
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
  rest: any;
  // control: Control<T>;
}

interface InputStylePropsType {
  $LabelRequiredColor?: string;
}

export type { InputPropsType, InputStylePropsType };
