import { AppProps } from "next/app";
import HeadData from "@/components/Metadata/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeadData />
            { /*<Header />*/ }
            <Component {...pageProps} />
            { /*<Footer />*/ }
        </>
    );
}

export default MyApp;