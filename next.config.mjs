import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const buildDate = new Date().toISOString().split('T')[0]

console.log(`📦 Generating build with LASTMOD = ${buildDate}`)

const nextConfig = {
    env: {
        NEXT_PUBLIC_LASTMOD: buildDate,
    },
}

export default withNextIntl(nextConfig)
