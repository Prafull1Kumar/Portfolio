function escapeHtml(value = '') {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

export default function buildContactTemplate({name, email, message}) {
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#1A202C;color:#FAF9F6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td>
          <table width="600" align="center" cellpadding="0" cellspacing="0" style="margin:40px auto;background-color:#1F2937;border-radius:6px;overflow:hidden;">
            <tr>
              <td style="background-color:#111827;padding:20px;text-align:center;">
                <img src="https://prafull.tech/logo.png" alt="Prafull Kumar logo" width="100" style="display:block;margin:0 auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding:30px 20px 10px;text-align:left;">
                <strong style="font-size:18px;">
                  Contacted by ${safeName} (<a href="mailto:${safeEmail}" style="color:#FAF9F6;">${safeEmail}</a>):
                </strong>
              </td>
            </tr>
            <tr>
              <td style="padding:20px;text-align:left;">
                <p style="font-size:16px;line-height:1.6;margin:0;font-style:italic;">
                  ${safeMessage}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
