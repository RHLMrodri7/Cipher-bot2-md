
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `¡¡Sigueme en mis redes sociales y más!!
• IG: https://instagram.com/fabi_realg4life
• FB: Rodrigo Cabañas (fabi)
• WP: wa.me/595993317736
`
    let pp = './src/avatar_contact.png' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['redes', 'cuentas']
handler.tags = ['main']
handler.command = ['redes', 'cuentas'] 

export default handler
