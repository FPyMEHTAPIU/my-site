import Head from "next/head";

const HeadData = () => {
    return (
        <Head>
            <meta charSet="UTF-8"/>
            <title>Nick Saveliev - Full-Stack Developer</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="Nick Saveliev, portfolio, Full-Stack,
                Full-Stack Developer, Fullstack, fullstack, fullstack developer, developer, programmer,
                software engineer, frontend, frontend developer, front-end, front-end developer, backend,
                backend developer, back-end, back-end developer"
            />
            <meta name="description" content="Here you can explore my skills and see how
                I’ve applied them in my projects."/>
            <meta name="theme-color" content="#161616"/>
            <link rel="icon" href="/favicon.svg"/>

            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Nick Saveliev's portfolio website"/>
            <meta property="og:description" content="Here you can explore my skills and see how I’ve
                applied them in my projects."/>
            <meta property="og:url" content="https://nicksaveliev.vercel.app/"/>
            <meta property="og:image"
                  content="https://github.com/FPyMEHTAPIU/my-site/blob/main/frontend/public/preview-image.jpg?raw=true"
            />

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Nick Saveliev's portfolio website"/>
            <meta name="twitter:description" content="Here you can explore my skills and see how I’ve
                applied them in my projects."/>
            <meta name="twitter:image"
                  content="https://github.com/FPyMEHTAPIU/my-site/blob/main/frontend/public/preview-image.jpg?raw=true"/>
            <meta name="google-site-verification" content="DBsF0U0s9DnMSeuYuUHwqlQEIkiGus18o-lQt8vWVKY"/>
        </Head>
    )
}

export default HeadData;