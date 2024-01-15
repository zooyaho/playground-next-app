import { UseFormProps, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export type FormDataType = {
  id: string;
  pw: string;
};

// emailValidate 메서드 정의, StringSchema 인터페이스를 emailValidate 확장을 해야함,
// validation 메서드인가 , 정규표현식 적용할 수 있는 메서드가 있음.
/*
yup.addMethod(yup.string, 'emailValidate', function (errorMessage) {
  return this.test('emailValidate', errorMessage, function (value) {
    const { path, createError } = this;

    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    return value && reg.test(value) || createError({ path, message: errorMessage });
  });
});
*/
export const loginFormSchema = yup.object().shape({
  id: yup
    .string()
    .required('아이디를 입력해주세요')
    .email('이메일 형식을 확인해주세요'),
  pw: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(10, '최소 10자 이상 입력해주세요.'),
});

const useFormValidate = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onSubmit', // 유효성 검사 시기 설정
    defaultValues: { id: '', pw: '' },
    ...options,
  });
};

export default useFormValidate;
