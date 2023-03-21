import "@/styles/globals.css";
import { FC } from "react";
import { EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import PageProvider from "../components/helpers/PageProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <ToastContainer />
    <Component {...pageProps} />
  </PageProvider>
);

export default App;
