import { AppProps } from "next/app";
import HeadData from "@/components/Metadata/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {useRouter} from "next/router";

import '@/styles/colors.css'
import '@/styles/g_style.css'
import '@/styles/typo.css'
import '@/styles/work.css'
import '@/styles/404.css'

import '@/styles/components/arrows.css'
import '@/styles/components/buttons.css'
import '@/styles/components/cards.css'
import '@/styles/components/controls.css'
import '@/styles/components/footer.css'
import '@/styles/components/header.css'
import '@/styles/components/input.css'

import '@/styles/components/home-elems.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <HeadData />
            <Header />
            <Component {...pageProps} />
            {router.pathname !== '/404' && <Footer />}
        </>
    );
}

export default MyApp;