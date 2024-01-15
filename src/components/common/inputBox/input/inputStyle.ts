import styled, { css } from 'styled-components';
import { InputStylePropsType } from './inputType';

// TODO. 새로고침하면 뭔가 이상해짐;;
// TODO. disabled에 대한 색상 적용
const Input = styled.input<InputStylePropsType>`
  ${({ theme }) => {
    const { font, colors } = theme;
    return css`
      outline: none;
      padding: 10px;
      flex-grow: 1;

      &::placeholder {
        color: ${colors['$gray500']};
      }

      &:-webkit-autofill {
        box-shadow: none;
      }
    `;
  }}
`;

export { Input };
