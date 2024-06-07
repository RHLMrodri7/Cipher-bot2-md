import db from '../lib/database.js';

let handler = async (m, { args }) => {
   let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
   
   let users =  global.db.data.users[m.sender];
   if (!args[0]) return m.reply('[❌] Ingresa la cantidad de Coins que deseas Depositar.');
   if (args[0] == '--all') {
      let count = parseInt(users.dolares);
      users.coin -= count * 1
      users.bank += count * 1
      await m.reply(`*Depositaste ${count} de Coins al Banco.* 🪙`);
      return !0;
   };
   if (!Number(args[0])) return m.reply('[⚠️] La cantidad debe ser un Numero.');
   let count = parseInt(args[0]);
   if (!users.coin) return m.reply('[🥺] No tienes Coins en la Cartera.');
   if (users.coin < count) return m.reply(`[❌] Solo tienes ${users.coin} *coins* en la Cartera.`);
   users.coin -= count * 1;
   users.bank += count * 1;
   await m.reply(`*Depositaste ${count} de Coins al Banco.* 🪙`);
};

handler.help = ['deposit'];
handler.tags = ['econ'];
handler.command = ['deposit', 'depositar', 'dep'];

export default handler
