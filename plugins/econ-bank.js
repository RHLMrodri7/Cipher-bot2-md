import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix}) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   if (who == conn.user.jid) return error 
   if (!(who in global.db.data.users)) return conn.reply(m.chat, 'El usuario no se encuentra en mi base de Datos.', m, adReply)
   let user = global.db.data.users[who]
   await m.reply(`${who == m.sender ? `Tienes *${user.bank} Coins* en el banco` : `El usuario @${who.split('@')[0]} tiene *${user.bank} Coins* en el banco`}. `, null, { mentions: [who] })
}

handler.help = ['bank']
handler.tags = ['econ']
handler.command = ['wallet', 'banco', 'bank', 'dinero']
handler.register = false 
export default handler