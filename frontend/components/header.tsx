import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {string} from "prop-types";

const Header = () => {
    const router = useRouter();
    const [page, setPage] = useState<string|undefined>('');

    useEffect(() => {
        if (router.isReady) {
            setPage(router.query.index as string|undefined);
        }
    }, [router.isReady, router.query.index]);

    return (
        <header>
            <a href='/'
               className={!page ? 'menu-item menu-item-selected' : 'menu-item'}
            >
                <p className={!page ? 'body-small black' : 'body-small'}>Home</p>
            </a>
            <a href='/work'
               className={page === 'work' ? 'menu-item menu-item-selected' : 'menu-item'}
            >
                <p className={page === 'work' ? 'body-small black' : 'body-small'}>Work</p>
            </a>
            <a href='/contact'
               className={page === 'contact' ? 'menu-item menu-item-selected' : 'menu-item'}
            >
                <p className={page === 'contact' ? 'body-small black' : 'body-small'}>Contact</p>
            </a>
        </header>
    )
}

export default Header;