import { usePostRequestToken } from '@/api/auth/authApi.query';
import { useGetMyInfo } from '@/api/users/usersApi.query';
import FindPasswordModal from '@/components/loginPage/fragments/findPasswordModal';
import * as Style from '@/components/loginPage/loginStyle';
import useVisible from '@/hooks/useVisible';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useLoginFormValidate from './_hooks/useLoginFormValidate';
import { LoginFormDataType } from './loginType';
import axios, { AxiosError } from 'axios';

function LoginPage() {
  const {
    handleSubmit,
    formState: { errors: validationErrors },
    setValue,
    setError,
    control,
  } = useLoginFormValidate();
  const { t } = useTranslation();
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false); // 로그인 로딩 여부
  const [isSaveLoginId, setIsSaveLoginId] = useState<boolean>(false); // 자동 로그인 여부
  const [isShowPasswordModal, onChangeShowPasswordModal] = useVisible(); // 비밀번호 찾기 모달 창 show 여부

  const getMyInfo = useGetMyInfo(); // myInfo api
  const { postRequestLoginToken } = usePostRequestToken(); // token api

  /**
   * 자동 로그인 저장
   * */
  const onSaveLoginId = (loginId: string) => {
    if (isSaveLoginId) {
      localStorage.setItem('mw_admin_loginId', loginId);
    } else {
      localStorage.removeItem('mw_admin_loginId');
    }
  };

  const onSubmitLogin = async (data: LoginFormDataType) => {
    if (Object.keys(validationErrors).length === 0) {
      // 폼의 유효성 검사 모두 통과 했을 경우 제출
      onSaveLoginId(data.loginId);
      setIsLoadingLogin(true); // TODO. 로그인 버튼 로딩 스타일 > 스타일 확인 예정

      postRequestLoginToken(
        {
          loginId: data.loginId,
          pw: data.password,
        },
        {
          onSuccess: () => {
            // token api 성공시, myInfo api 호출
            try {
              getMyInfo.refetch();
            } catch (error) {
              console.log(error);
            }
          },
          onError: (error) => {
            if (axios.isAxiosError(error)) {
              const axiosError = error as AxiosError;

              if (axiosError.response?.status === 403) {
                // 등록한 계정이 아닐경우 에러 설정
                setError('loginId', {
                  type: 'accountNotFound',
                });
                setError('password', {
                  type: 'accountNotFound',
                  message: t('login_id_pw_error_msg'),
                });
              }
            }
          },
          onSettled: () => {
            // 성공, 실패 상관없이 비동기 작업 완료된 후, 호출되는 콜백함수
            setIsLoadingLogin(false);
          },
        },
      );
    }
  };

  /**
   * localStorage에 있는 login id 값 필드에 설정
   */
  useEffect(() => {
    if (localStorage.getItem('mw_admin_loginId')) {
      const idValue = localStorage.getItem('mw_admin_loginId') || '';
      setValue('loginId', idValue);
      setIsSaveLoginId(true);
    }
  }, []);

  return (
    <Style.Section>
      <Style.Wrapper>
        <img src="" alt="login logo" />
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <Style.Input
            name="loginId"
            id="loginId"
            isLabelRequired={true}
            type="text"
            placeholder={t('login_id_phd')}
            autoComplete="off"
            control={control}
          />
          <Style.Input
            name="password"
            id="password"
            type="password"
            placeholder={t('login_pw_phd')}
            autoComplete="off"
            control={control}
          />
          {/* TODO. isLoadingLogin 스타일 적용되는지 확인 */}
          <Style.LoginButton
            type="submit"
            $buttonColor="blue"
            $isLoading={isLoadingLogin}
          >
            {t('login_btn')}
          </Style.LoginButton>
        </form>
        <Style.BottomButtonWrapper>
          {/* 아이디 저장 체크박스 */}
          <Style.LoginCheckbox
            id="login-checkbox"
            label={t('save_login_id')}
            isChecked={isSaveLoginId}
            onToggleCheckedStatus={setIsSaveLoginId}
          />
          {/* 비밀번호 찾기 버튼 */}
          <Style.FindPasswordButton onClick={onChangeShowPasswordModal}>
            {t('find_login_pw')}
          </Style.FindPasswordButton>
        </Style.BottomButtonWrapper>
      </Style.Wrapper>
      {isShowPasswordModal && (
        <FindPasswordModal
          isAnimate={isShowPasswordModal}
          onChangeShow={onChangeShowPasswordModal}
        />
      )}
    </Style.Section>
  );
}

export default LoginPage;
