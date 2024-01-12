import Input from '../common/inputBox/input';
// import ControlInputText from 'component/ControlInputText';
import { useForm } from 'react-hook-form';
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
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormValidate();

  const onSubmitHandler = async (data: formDataType) => {
    console.log(' 로그인 데이터 !!! >> ', data);
  };

  return (
    <main>
      <p>prHookFormPage 입니다.</p>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {/* ID */}
        <Input
          name="id"
          id="loginId"
          type="text"
          placeholder="이메일 아이디 입력"
          hasError={!!errors.id}
          register={register}
          watch={watch}
        />
        <p className="message">{errors.id?.message}</p>
        {/* PW */}
        <Input
          name="pw"
          id="password"
          type="password"
          placeholder="비밀번호 입력"
          hasError={!!errors.pw}
          register={register}
          watch={watch}
        />
        <p className="message">{errors.pw?.message}</p>
        <button type="submit">로그인</button>
      </form>
    </main>
  );
}

export default PrHookFormPage;
