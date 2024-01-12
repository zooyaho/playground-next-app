import styled, { css } from 'styled-components';

const NavWrapper = styled.nav`
  ${() => {
    return css`
      /* position: absolute; */
      top: 0;
      height: 90px;
      left: 0;
      width: 100vw;
      border: 1px solid gray;
    `;
  }}
`;

const UlWrapper = styled.ul`
  ${() => {
    return css`
      display: flex;
      gap: 10px;
    `;
  }}
`;

export { NavWrapper, UlWrapper };
