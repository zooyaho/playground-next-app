import GlobalStyle from '@/styles/globalStyle';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Nav from '@/components/common/nav/nav';
import { theme } from '@/styles/them';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <Nav></Nav>
      <ThemeProvider theme={theme}>
        <main style={{ marginTop: '90px' }}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
