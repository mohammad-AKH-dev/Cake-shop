import Navbar from "@/components/modules/Navbar";
import Topbar from "@/components/modules/Topbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
   <Topbar/>
   <Navbar/>
   <Component {...pageProps} />
   </>
}
