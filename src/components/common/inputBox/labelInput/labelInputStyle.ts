import styled, { css } from 'styled-components';
import { LabelInputStylePropsType } from './labelInputType';

const Container = styled.div`
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

const Label = styled.label`
  ${({ theme }) => {
    const { font, colors } = theme;
    return css`
      ${font['S3']}; // TODO. 폰트 prop에 따른 값 할당
      color: ${colors['$gray700']};
    `;
  }}
`;

const LabelRequired = styled.i<LabelInputStylePropsType>`
  ${({ theme, $LabelRequiredColor }) => {
    const { colors } = theme;
    return css`
      color: ${$LabelRequiredColor ? colors[$LabelRequiredColor] : 'inherit'};
    `;
  }}
`;

const InputWrapper = styled.div`
  ${({ theme }) => {
    const { font, colors } = theme;

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3px;

      ${font['B3']};
      color: ${colors['$gray700']};
      width: 100%;
      height: 40px;
      border: 2px solid ${colors['$gray400']};
      border-radius: 4px;
      background-color: ${colors['$gray50']};

      &.active {
        border: 2px solid ${colors['$gray700']};
      }
      &.error {
        border: 2px solid ${colors['$red500']};
      }
    `;
  }}
`;

const LeftIcon = styled.span`
  ${({ theme }) => {
    return css`
      height: 100%;
      padding: 5px 5px 0 0;
    `;
  }}
`;

const VisibilitySwitchBtn = styled.button`
  ${({ theme }) => {
    const { font, colors } = theme;
    return css`
      flex-basis: 20px;
    `;
  }}
`;

const InfoWrapper = styled.div`
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

const InfoText = styled.p`
  ${() => {
    return css`
      display: inline-block;
    `;
  }}
`;

const LengthLabel = styled.p`
  ${({ theme }) => {
    const { font, colors } = theme;
    return css`
      ${font['B3']};
      color: ${colors['$gray500']};
      text-align: right;
    `;
  }}
`;

export {
  Container,
  Label,
  LabelRequired,
  InputWrapper,
  LeftIcon,
  VisibilitySwitchBtn,
  InfoWrapper,
  InfoText,
  LengthLabel,
};
