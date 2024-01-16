import styled, { css } from 'styled-components';
import { LabelInputStylePropsType } from './labelInputType';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

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

/* 필수값일 경우의 아이콘 */
const LabelRequiredIcon = styled.i<LabelInputStylePropsType>`
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
      border-radius: 4px;
      border: 2px solid ${colors['$gray500']};
      background-color: ${colors['$gray50']};

      &.active {
        border: 2px solid ${colors['$gray700']};
      }
      &.error {
        border: 2px solid ${colors['$red400']};
      }
    `;
  }}
`;

// TODO. LeftIcon 있을 경우 확인
const LeftIcon = styled.span`
  ${({ theme }) => {
    return css`
      height: 100%;
      padding: 5px 5px 0 0;
    `;
  }}
`;

const VisibilitySwitchBtn = styled.button`
  ${() => {
    return css`
      flex-basis: 40px;
    `;
  }}
`;

const VisibilityIcon = styled(MdOutlineVisibility)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      vertical-align: sub;
      font-size: 20px;
      color: ${colors['$gray500']};
    `;
  }}
`;

const VisibilityOffIcon = styled(MdOutlineVisibilityOff)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      vertical-align: sub;
      font-size: 20px;
      color: ${colors['$gray500']};
    `;
  }}
`;

const InfoWrapper = styled.div`
  ${() => {
    return css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
    `;
  }}
`;

/* 필드의 정보, 에러 문구 */
const InfoText = styled.p`
  ${({ theme }) => {
    const { colors, font } = theme;
    return css`
      ${font['B3']};
      color: ${colors['$gray500']};

      &.error {
        color: ${colors['$red400']};
      }
    `;
  }}
`;

/* 필드 값의 length 표시 라벨 */
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
  LabelRequiredIcon,
  InputWrapper,
  LeftIcon,
  VisibilitySwitchBtn,
  VisibilityIcon,
  VisibilityOffIcon,
  InfoWrapper,
  InfoText,
  LengthLabel,
};
