function ContactTemplate({ name, email, message }) {
    return (
        <html>
        <body
            style={{
                margin: 0,
                padding: 0,
                backgroundColor: '#1A202C',
                color: '#FAF9F6',
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            }}
        >
        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
            <tr>
                <td>
                    <table
                        width="600"
                        align="center"
                        cellPadding="0"
                        cellSpacing="0"
                        style={{
                            margin: '40px auto',
                            backgroundColor: '#1F2937',
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}
                    >
                        <tr>
                            <td
                                style={{
                                    backgroundColor: '#111827',
                                    padding: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                <img
                                    src="https://tvoosai.dev/logo.png"
                                    alt="Logo"
                                    width="100"
                                    style={{ display: 'block', margin: '0 auto' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '30px 20px 10px', textAlign: 'left' }}>
                                <strong style={{ fontSize: '18px' }}>
                                    Contattato da {name} (<a href={`${email}`} style={{ color: '#FAF9F6' }}>{email}</a>):
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '20px', textAlign: 'left' }}>
                                <p
                                    style={{
                                        fontSize: '16px',
                                        lineHeight: '1.6',
                                        margin: 0,
                                        fontStyle: 'italic',
                                    }}
                                >
                                    {message}
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </body>
        </html>
    );
}

export default ContactTemplate