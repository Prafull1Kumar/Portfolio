import { NextResponse } from 'next/server'

export const runtime = 'edge'

export function GET() {
    const body = `User-agent: *
Allow: /
Sitemap: https://tvoosai.dev/sitemap.xml`

    return new NextResponse(body, {
        headers: {
            'Content-Type': 'text/plain',
        },
    })
}