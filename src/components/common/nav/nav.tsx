import Link from 'next/link';
import * as S from './nav.style';

function Nav() {
  return (
    <S.NavWrapper>
      <S.UlWrapper>
        <Link href={'/home'}>Home</Link>
        <Link href={'/pr-hook-form'}>pr-hook-form</Link>
      </S.UlWrapper>
    </S.NavWrapper>
  );
}

export default Nav;
