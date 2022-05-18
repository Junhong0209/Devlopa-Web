import GlobalStyle from "src/styles/globalStyles";
import ErrorBoundary from "src/components/ErrorBoundary/ErrorBoundary";
import Modal from "react-modal";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import { theme } from "src/styles/theme";
import { ThemeProvider, Global } from "@emotion/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <ErrorBoundary>
          <Global styles={GlobalStyle} />
          <Component {...pageProps} />
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                width: "560px",
              },
            }}
          />
        </ErrorBoundary>
      </RecoilRoot>
    </ThemeProvider>
  );
}

Modal.setAppElement("#__next");

export default MyApp;
