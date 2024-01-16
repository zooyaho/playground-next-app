import Button from '@/components/common/button/button';
import Checkbox from '@/components/common/checkbox';
import { LabelInput } from '@/components/common/inputbox';
import { LabelInputPropsType } from '@/components/common/inputbox/labelInput/labelInputType';
import { LoginFormDataType } from './loginType';
import styled, { css } from 'styled-components';

const Section = styled.section`
  height: 100vh;
  background-color: white;
  /* 이미지 배경일 경우 아래 속성 사용 */
  /* background-repeat: no-repeat;
  background-size: cover; */
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  text-align: center;
  width: 320px;

  @media only screen and (max-device-height: 480px) {
    top: 60px;
    transform: translateX(-50%);
  }
`;

const Input = styled(LabelInput)<LabelInputPropsType<LoginFormDataType>>`
  ${({ theme }) => {
    const { colors, font } = theme;
    return css`
      margin-bottom: 10px;
    `;
  }}
`;

const LoginButton = styled(Button)`
  ${({ theme, $buttonColor }) => {
    const { font, commonButton } = theme;

    return css`
      min-width: 100%;
      margin: 15px 0 11px 0;
      ${commonButton($buttonColor)};

      span {
        ${font['BTN1']}
      }
    `;
  }}
`;

const BottomButtonWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
    `;
  }}
`;

/* 아이디 저장 체크박스 */
const LoginCheckbox = styled(Checkbox)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      span {
        color: ${colors['$black']};
      }
    `;
  }}
`;

/* 비밀번호 찾기 버튼 */
const FindPasswordButton = styled.button`
  ${({ theme }) => {
    const { colors, font } = theme;
    return css`
      ${font['B3']}
      color: ${colors['$black']};
      cursor: pointer;
    `;
  }}
`;

export {
  Section,
  Wrapper,
  Input,
  BottomButtonWrapper,
  FindPasswordButton,
  LoginButton,
  LoginCheckbox,
};
