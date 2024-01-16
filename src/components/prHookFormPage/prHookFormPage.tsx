import LabelInput from '../common/inputBox/labelInput/labelInput';
// import ControlInputText from 'component/ControlInputText';
import { useForm, Form } from 'react-hook-form';
import useFormValidate from './_hooks/useFormValidate';

interface formDataType {
  id: string;
  pw: string;
}

function PrHookFormPage() {
  // const {
  //   register,
  //   control,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<IForm>({
  //   mode: 'onSubmit',
  //   defaultValues: {
  //     id: '',
  //     pwd: '',
  //   },
  // });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormValidate();

  const onSubmitHandler = async (data: formDataType) => {
    console.log(' 로그인 데이터 !!! >> ', data);
  };

  return (
    <main>
      <p>prHookFormPage 입니다.</p>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {/* ID */}
        <LabelInput
          name="id"
          id="loginId"
          labelValue="아이디"
          isLabelRequired={true}
          type="text"
          placeholder="이메일 아이디 입력"
          maxLength="13"
          // isDisabled={true}
          control={control}
        />
        {/* PW */}
        <LabelInput
          name="pw"
          id="password"
          labelValue="비밀번호"
          type="password"
          maxLength="10"
          placeholder="비밀번호 입력"
          control={control}
        />
        <button type="submit">로그인</button>
      </ㄹ>
    </main>
  );
}

export default PrHookFormPage;
