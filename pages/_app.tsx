import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CalculatorProvider } from "../Context/Calculator";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CalculatorProvider>
      <Component {...pageProps} />
    </CalculatorProvider>
  );
}

export default MyApp;
