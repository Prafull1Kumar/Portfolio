import '../styles/global.css';

export const metadata = {
    metadataBase: new URL('https://tvoosai.dev'),
    title: "Tvoosai – Freelance Mobile & Web Developer",
    description: "Discover the portfolio of Matteo Tvoosai, freelance developer skilled in Flutter, React and modern backend technologies for cross-platform apps.",
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-32x32.png',
        apple: '/apple-touch-icon.png',
        other: [
            { rel: 'icon', sizes: '16x16', url: '/favicon-16x16.png' },
            { rel: 'icon', sizes: '32x32', url: '/favicon-32x32.png' }
        ],
    },
}

export default async  function RootLayout({children, params}) {
    const {locale} = await params
    return (
        <html lang={locale}>
        <head>
            <link rel="icon" href="/logo_short.svg"/>
            <meta name="theme-color" content="#faf9f6" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
            <meta name="background-color" content="#faf9f6" media="(prefers-color-scheme: light)" />
            <meta name="background-color" content="#111827" media="(prefers-color-scheme: dark)" />
        </head>
        <body className="antialiased">{children}</body>
        </html>
    )
}