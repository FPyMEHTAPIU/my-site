import Head from "next/head";

const HeadData = () => {
    return (
        <Head>
            <meta charSet="UTF-8"/>
            <title>Nick Saveliev</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="Nick Saveliev, portfolio, Full-Stack,
            Full-Stack Developer, developer, programmer, software engineer, front-end,
            front-end developer"/>
            <meta name="theme-color" content="#161616"/>
            <link rel="icon" href="/favicon.svg"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Nick Saveliev's portfolio website"/>
            <meta property="og:description" content="Here you can see my skills and projects."/>
            <meta property="og:url" content="https://nicksaveliev.vercel.app/"/>
            <meta property="og:image"
                  content="https://drive.google.com/file/d/1mWBbygHJdihVxDQwsyu3Z6oa7v9Mmec5/view?usp=sharing"
            />
        </Head>
    )
}

export default HeadData;