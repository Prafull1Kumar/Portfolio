import {NextResponse} from 'next/server';
import {renderToStaticMarkup} from 'react-dom/server';
import ContactTemplate from "../../../../mail/contactTemplate";

const GMAIL_TO_EMAIL = process.env.GMAIL_TO_EMAIL || 'prajapatiprafull12@gmail.com'
const GMAIL_SENDER_EMAIL = process.env.GMAIL_SENDER_EMAIL || 'prajapatiprafull12@gmail.com'

async function getGmailAccessToken() {
    const params = new URLSearchParams({
        client_id: process.env.GMAIL_CLIENT_ID || '',
        client_secret: process.env.GMAIL_CLIENT_SECRET || '',
        refresh_token: process.env.GMAIL_REFRESH_TOKEN || '',
        grant_type: 'refresh_token'
    })

    const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: params.toString(),
        cache: 'no-store'
    })

    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Unable to refresh Gmail access token: ${errorText}`)
    }

    const data = await response.json()
    return data.access_token
}

function buildRawEmail({fromName, fromEmail, toEmail, subject, html}) {
    const mime = [
        `From: ${fromName} <${GMAIL_SENDER_EMAIL}>`,
        `To: ${toEmail}`,
        `Reply-To: ${fromEmail}`,
        `Subject: ${subject}`,
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        '',
        html
    ].join('\r\n')

    return Buffer.from(mime)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '')
}

async function sendViaGmail(payload) {
    const accessToken = await getGmailAccessToken()
    const raw = buildRawEmail(payload)

    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({raw}),
        cache: 'no-store'
    })

    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Gmail send failed: ${errorText}`)
    }
}

export async function POST(req) {
    try {
        const {name, email, message, website} = await req.json()

        if (website && website.trim() !== '') {
            return NextResponse.json({success: false}, {status: 400})
        }

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return NextResponse.json({success: false, error: 'Missing required fields'}, {status: 400})
        }

        const html = renderToStaticMarkup(
            <ContactTemplate name={name.trim()} email={email.trim()} message={message.trim()}/>
        )

        await sendViaGmail({
            fromName: `${name.trim()} contact`,
            fromEmail: email.trim(),
            toEmail: GMAIL_TO_EMAIL,
            subject: `Portfolio contact from ${name.trim()}`,
            html
        })

        return NextResponse.json({success: true}, {status: 200})
    } catch (e) {
        console.error(e)
        return NextResponse.json({success: false, error: e.message || 'Internal server error'}, {status: 500})
    }
}
