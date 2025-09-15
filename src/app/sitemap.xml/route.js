import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
    const baseUrl = 'https://tvoosai.dev' // ✅ senza www
    const lastMod = process.env.NEXT_PUBLIC_LASTMOD || '2025-01-01'

    const routes = [
        { path: '', priority: 1.0 },     // homepage
        { path: 'it', priority: 0.9 },
        { path: 'en', priority: 0.9 },
        { path: 'de', priority: 0.9 }
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
        .map(
            ({ path, priority }) => `
  <url>
    <loc>${baseUrl}${path ? `/${path}` : ''}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
        )
        .join('')}
</urlset>`

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}