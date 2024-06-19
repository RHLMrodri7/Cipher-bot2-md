const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '*Faltó Un Sticker E Imagen*';
  if (!m.quoted.fileSha256) throw '💫 *Solo sticker e imágenes.*';
  if (!text) throw `*Faltó un sticker o imagen.*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '*👑 Solo el creador del bot puede usar este comando.*';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`💫 *Agregado con éxito.*`);
};
handler.tags = ['owner']
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
