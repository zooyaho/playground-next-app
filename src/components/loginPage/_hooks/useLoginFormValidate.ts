import { UseFormProps, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useTranslation } from "react-i18next";
import { LoginFormDataType } from "../loginType";
// import regExp from "@/styles/const/regExp";
/**
 * 로그인 폼의 유효성 검사 스키마 설정
 * @returns useForm 객체
 */
const useLoginFormValidate = (options?: UseFormProps<LoginFormDataType>) => {
  // const { t } = useTranslation();
  // loginId, password 필드 validation schema 설정
  const loginFormSchema = yup.object().shape({
    loginId: yup.string().required("login_id_error_2_msg").max(30),
    // .matches(regExp.loginId, "login_id_error_1_msg"),
    password: yup.string().required("login_pw_error_msg"),
    // .matches(regExp.password, "login_pw_error_msg"),
  });
  return useForm<LoginFormDataType>({
    resolver: yupResolver(loginFormSchema),
    mode: "onSubmit", // 유효성 검사 시기 설정
    defaultValues: { loginId: "", password: "" },
    ...options,
  });
};
export default useLoginFormValidate;
