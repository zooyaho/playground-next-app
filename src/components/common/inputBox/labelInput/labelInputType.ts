import { FieldValues, Path, Control } from "react-hook-form";

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
  autoComplete?: "on" | "off";
  tabIndex?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  // 기타 필요한 프로퍼티들
}

interface LabelInputStylePropsType {
  $LabelRequiredColor?: string;
}

export type { LabelInputPropsType, LabelInputStylePropsType };
