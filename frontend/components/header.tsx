import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Header = () => {
    const router = useRouter();
    const [page, setPage] = useState<string>('');

    useEffect(() => {
        if (router.isReady) {
            setPage(router.pathname as string);
        }
    }, [router.isReady, router.pathname]);

    return (
        <header>
            <a href='/'
               className={page === '/' ? 'menu-item menu-item-selected' : 'menu-item'}
            >
                <p className={page === '/' ? 'body-small black' : 'body-small'}>Home</p>
            </a>
            <a href='/work'
               className={page.includes('/work') ? 'menu-item menu-item-selected' : 'menu-item'}
            >
                <p className={page.includes('/work') ? 'body-small black' : 'body-small'}>Work</p>
            </a>
            <a href='/contact'
               className={page.includes('/contact') ? 'menu-item menu-item-selected' : 'menu-item'}
            >
                <p className={page.includes('/contact') ? 'body-small black' : 'body-small'}>Contact</p>
            </a>
        </header>
    )
}

export default Header;