// import { theme } from '@/styles/theme';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body,
    p,
    h1, 
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    ol,
    li,
    dl,
    dt,
    dd,
    table,
    th,
    td,
    form,
    fieldset,
    legend,
    input,
    textarea,
    button,
    article,
    aside,
    canvas,
    details,
    figcaption,
    figure,
    footer,
    header,
    menu,
    nav,
    section,
    audio,
    video,
    blockquote {
      margin: 0;
      padding: 0;
    }

    header,
    section,
    footer,
    aside,
    nav,
    main,
    article,
    figure {
      display: block;
    }

    body,
    input,
    textarea,
    select,
    table,
    button,
    code {
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.25;
    }

    body {
      overflow: hidden !important;
      position: relative;
      background-color: #ffffff;
      word-wrap: break-word;
      word-break: keep-all;
      -webkit-text-size-adjust: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    img,
    fieldset {
      border: 0;
    }

    img {
      vertical-align: top;
    }

    em,
    address,
    cite,
    dfn {
      font-style: normal;
    }

    abbr {
      text-decoration: none;
    }

    a,
    label,
    button,
    input[type='checkbox'],
    input[type='radio'] {
      color: inherit;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(26, 26, 26, 0.301961);
    }

    table {
      border-collapse: collapse;
    }

    hr {
      border: 0;
      margin: 0;
      padding: 0;
    }

    textarea {
      overflow: auto;
      border: 1px solid #bcbcbc;
      resize: none;
      -webkit-overflow-scrolling: touch;
    }

    input, textarea {
      outline: none;
      border: none;
      background-color: transparent;
    }

    button {
      overflow: visible;
      border: none;
      background: none;
      cursor: pointer;
      -webkit-user-select: none;
    }

    button[disabled],
    button.disabled {
      cursor: default;
    }

    button,
    [role='button'] {
      cursor: pointer;
    }

    input[type='image'],
    input[type='text'],
    input[type='submit'],
    input[type='password'] {
      border-radius: 0;
    }

    input[type='text']::-ms-clear {
      display: none;
    }

    input[type='password']::-ms-reveal {
      display: none;
    }

    b {
      font-weight: bold;
    }

    /* * {
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background: white;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 3.5px;
        background-color: theme.colors.$gray300;

        &:hover {
          background-color: atheme.colors.$gray400;
        }
      }
      &::-webkit-scrollbar-track {
        background: white;
      }
    } */
`;

export default GlobalStyle;
