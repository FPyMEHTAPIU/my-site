import {useRouter} from "next/router";

const Header = () => {
    const router = useRouter();
    const page = router.query;
    console.log(page);
    return (
        <header>
            <a href='/' className='menu-item'>
                <p className='body-small'>Home</p>
            </a>
            <a href='/work' className='menu-item'>
                <p className='body-small'>Work</p>
            </a>
            <a href='/contact' className='menu-item'>
                <p className='body-small'>Contact</p>
            </a>
        </header>
    )
}

export default Header;