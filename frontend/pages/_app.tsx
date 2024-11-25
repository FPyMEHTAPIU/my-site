import { AppProps } from "next/app";
import HeadData from "@/components/Metadata/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

import '@/styles/colors.css'
import '@/styles/g_style.css'
import '@/styles/typo.css'

import '@/styles/components/arrows.css'
import '@/styles/components/buttons.css'
import '@/styles/components/cards.css'
import '@/styles/components/controls.css'
import '@/styles/components/footer.css'
import '@/styles/components/header.css'
import '@/styles/components/input.css'

import '@/styles/components/home-elems.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeadData />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;