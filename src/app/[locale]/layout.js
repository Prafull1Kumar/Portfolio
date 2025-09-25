import {NextIntlClientProvider, hasLocale} from "next-intl"
import {notFound} from "next/navigation"
import {routing} from "@/i18n/routing"

export async function generateMetadata({params}) {
    const {locale} = await params;

    const baseUrl = 'https://tvoosai.dev'

    const metadataByLocale = {
        it: {
            title: 'Portfolio Prafull Prajapati ',
            description: 'Scopri il portfolio di Matteo, sviluppatore freelance Mobile e Web.',
            locale: 'it_IT',
        },
        en: {
            title: 'Portfolio Prafull Prajapati',
            description: 'Explore Prafull\'s portfolio, a Backend & cloud developer.',
            locale: 'en_US',
        },
        de: {
            title: 'Portfolio von Matteo Tvoosai',
            description: 'Entdecken Sie das Portfolio von Matteo, freelance Mobile & Web developer.',
            locale: 'de_DE',
        }
    }

    const meta = metadataByLocale[locale] ?? metadataByLocale['en']

    return {
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: [`${baseUrl}/og-image.png`],
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            locale: meta.locale,
            url: `${baseUrl}/${locale}`,
            siteName: 'Prafull Portfolio',
            images: [
                {
                    url: `${baseUrl}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: meta.title,
                    secureUrl: `${baseUrl}/og-image.png`
                }
            ],
            type: 'website'
        },
        manifest: `/${locale}/site.webmanifest`,
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'it': `${baseUrl}/it`,
                'en': `${baseUrl}/en`,
                'de': `${baseUrl}/de`
            }
        }

    }
}

export default async function RootLayout({children, params}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
    )
}
