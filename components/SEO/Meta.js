import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>osfanbuff63's Portfolio</title>
            <meta charSet="utf-8" />
            <meta name="title" content="osfanbuff63's Portfolio" />
            <meta name="description"
                content="osfanbuff63's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="osfanbuff63" />
            <meta name="keywords"
                content="osfanbuff63, osfanbuff63's portfolio, osfanbuff63 linux, ubuntu portfolio, osfanbuff63 protfolio,osfanbuff63 computer, osfanbuff63, osfanbuff63 ubuntu, osfanbuff63 ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />
            <a rel="me" href="https://floss.social/@osfanbuff63"></a>

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="osfanbuff63's Portfolio" />
            <meta itemProp="description"
                content="osfanbuff63's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="osfanbuff63's Portfolio" />
            <meta name="twitter:description"
                content="osfanbuff63's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="osfanbuff63" />
            <meta name="twitter:creator" content="osfanbuff63" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="osfanbuff63's Portfolio" />
            <meta name="og:description"
                content="osfanbuff63's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="https://portfolio.osfanbuff63.tech" />
            <meta name="og:site_name" content="osfanbuff63 Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
