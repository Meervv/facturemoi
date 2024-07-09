import { SessionProvider } from "next-auth/react"
import { ReactNode, ComponentType } from "react";

interface AppProps {
  Component: ComponentType<any>;
  pageProps: {
    session: any;
    pageProps: any;
  };
}

export default function App() {
  return (
    <h1>HOME</h1>
  );
}
