import styled, { css } from 'styled-components';
import { InputStylePropsType } from './inputType';

// TODO. disabled에 대한 색상 적용
const Input = styled.input<InputStylePropsType>`
  ${({ theme }) => {
    const { font, colors } = theme;
    return css`
      ${font['B3']};
      width: 100%;
      border: none;
      outline: none;
      padding: 10px;
      flex-grow: 1;
      color: ${colors['$gray700']};
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
