import { FieldValues, Path, Control } from 'react-hook-form';

interface LabelInputPropsType<T extends FieldValues> {
  name: Path<T>;
  type: string;
  id: string;
  labelValue?: string;
  isLabelRequired?: boolean;
  LabelRequiredColor?: string;
  placeholder?: string;
  infoText?: string;
  maxLength?: string;
  autoComplete?: 'on' | 'off';
  tabIndex?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  control: Control<T>;
}

interface LabelInputStylePropsType {
  $LabelRequiredColor?: string;
}

export type { LabelInputPropsType, LabelInputStylePropsType };
