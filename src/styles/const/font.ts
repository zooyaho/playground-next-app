import { css } from 'styled-components';
import { colors } from './colors';

const font = {
  H1: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 78px;
    color: ${colors.$gray900};
  `,
  H2: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 70px;
    color: ${colors.$gray900};
  `,
  H3: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 52px;
    color: ${colors.$gray900};
  `,
  H4: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    color: ${colors.$gray900};
  `,
  H5: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    color: ${colors.$gray900};
  `,
  H6: css`
    font-family: 'NotoSansKR', sans-serif;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.55px;
    color: ${colors.$gray900};
  `,
  S1: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: ${colors.$gray900};
  `,
  S2: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    color: ${colors.$gray900};
  `,
  S3: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.$gray900};
  `,
  S4: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 17px;
    color: ${colors.$gray900};
  `,
  B1: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: ${colors.$gray900};
  `,
  B2: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.$gray900};
  `,
  B3: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: ${colors.$gray900};
  `,
  B4: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: ${colors.$gray900};
  `,
  B5: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-size: 8px;
    font-weight: 300;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    -webkit-transform: scale(0.8);
    color: ${colors.$gray900};
  `,
  Link1: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    text-decoration-line: underline;
  `,
  Link2: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    text-decoration-line: underline;
  `,
  BTN1: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
  `,
  BTN2: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 17px;
  `,
  BTN3: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
  `,
  BTN4: css`
    font-family: 'NotoSansKR', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
  `,
  Small1: css`
    font-family: 'NotoSansKR', sans-serif;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.36px;
    color: ${colors.$gray900};
  `,
  'Small-Button': css`
    font-family: 'Godo', sans-serif;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.36px;
    color: ${colors.$gray900};
  `,
  Small2: css`
    font-family: 'NotoSansKR', sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.36px;
    color: ${colors.$gray900};
  `,
  Small3: css`
    font-family: 'NotoSansKR', sans-serif;
    font-size: 10px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    color: ${colors.$gray900};
  `,
  Small4: css`
    font-family: 'NotoSansKR', sans-serif;
    font-size: 6px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.83;
    letter-spacing: -0.18px;
    color: ${colors.$gray900};
  `,
};

export { font };
