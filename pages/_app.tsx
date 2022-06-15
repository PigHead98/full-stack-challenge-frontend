import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import AlertProvider from "../src/contexts/Alerts";
import { NOTE_BACKEND_ENDPOINT } from "../src/share/config";
import "../styles/globals.css";

const client = new ApolloClient({
  uri: NOTE_BACKEND_ENDPOINT,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AlertProvider>
        <Component {...pageProps} />
      </AlertProvider>
    </ApolloProvider>
  );
}

export default MyApp;
