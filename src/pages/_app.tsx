import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

import type { AppProps } from "next/app";

import GlobalStyle from "src/styles/global-styles";
import ErrorBoundary from "src/components/ErrorBoundary/ErrorBoundary";
import Modal from "react-modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <GlobalStyle />
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
  );
}

Modal.setAppElement("#__next");

export default MyApp;
