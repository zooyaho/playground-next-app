import styled, { css } from 'styled-components';

interface InputStylePropsType {}

const InputWapper = styled.label<InputStylePropsType>`
  ${() => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 3px;
    `;
  }}
`;

const Label = styled.label<InputStylePropsType>`
  ${({ theme }) => {
    const { font, colors } = theme;
    return css`
      ${font['B2']}; // TODO. 폰트 prop에 따른 값 할당
      ${colors['gray700']}
    `;
  }}
`;

// TODO. 새로고침하면 뭔가 이상해짐;;
// TODO. disabled에 대한 색상 적용
const Input = styled.input<InputStylePropsType>`
  ${({ theme }) => {
    const { font, colors } = theme;
    return css`
      ${font['B3']};
      width: 100%;
      height: 40px;
      box-shadow: 0 0 0 1px ${colors['$gray400']} inset;
      outline: none;
      color: ${colors['$gray700']};
      background-color: ${colors['$gray50']};
      border-radius: 4px; // TODO.먹는지 확인하기
      padding: 10px;

      &.active {
        box-shadow: 0 0 0 1px ${colors['$gray700']} inset;
      }
      &.error {
        box-shadow: 0 0 0 1px ${colors['$red500']} inset;
      }

      &::placeholder {
        color: ${colors['$gray500']};
      }

      &:-webkit-autofill {
        box-shadow: none;
      }
    `;
  }}
`;

const InfoWrapper = styled.div<InputStylePropsType>`
  ${({ theme }) => {
    const { font, colors } = theme;
    return css`
      ${font['B3']};
      ${colors['$gray500']};
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
    `;
  }}
`;

const InfoText = styled.p<InputStylePropsType>`
  ${() => {
    return css`
      display: inline-block;
    `;
  }}
`;

const TextCounter = styled.p<InputStylePropsType>`
  ${({ theme }) => {
    const { font } = theme;
    return css`
      ${font['B4']};
      display: inline-block;
    `;
  }}
`;

export { InputWapper, Label, Input, InfoWrapper, InfoText, TextCounter };
