let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝕱𝖆𝖇𝖎𝖆́𝖓  🐲;;\nFN:𝕱𝖆𝖇𝖎𝖆́𝖓  🐲\nORG:𝕱𝖆𝖇𝖎𝖆́𝖓  🐲\nTITLE:\nitem1.TEL;waid=595993317736:595993317736\nitem1.X-ABLabel:𝕱𝖆𝖇𝖎𝖆́𝖓  🐲\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝕱𝖆𝖇𝖎𝖆́𝖓  🐲\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝕱𝖆𝖇𝖎𝖆́𝖓  🐲', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
