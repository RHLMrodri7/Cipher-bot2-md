const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `💫 *Para saber el texto use: ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '💫 *Solo el creador del bot puede usar este comando.*';
  delete sticker[hash];
  m.reply(`💫 *Elimindo con éxito.*`);
};
handler.tags = ['owner']
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
