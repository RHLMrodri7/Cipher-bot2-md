let media = './src/avatar_contact.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `Bienvenidos a las cuentas oficiales
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💻 *Bot Oficial:*
Wa.me/19543808164
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👑 *Propietario:*
Wa.me/595993317736
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🍁 *Facebook:*
• Rodrigo Cabañas 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐲 *Instagram:*
• fabi_realg4life
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`

handler.tags = ['main']
handler.command = /^cuentas|cuentasoficiales$/i
handler.exp = 0
handler.register = true
export default handler