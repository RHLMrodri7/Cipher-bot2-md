

let handler = async (m, { conn, args, text, usedPrefix , command }) => {
 
    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 )  throw `✳️ Uso de comandos: ${usedPrefix + command} <amount> <color>\n\n Ejemplo: ${usedPrefix + command} 500 red`
    let colores = ['red', 'black']
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender]
    if (isNaN(amount) || amount < 500) throw `✳️ La apuesta mínima es 500 de Coins.`
    if (!colores.includes(color)) throw '✳️ You must specify a valid color: red or black'
    if (user.limit < amount) throw '✳️ You do not have enough Coins!'
    if (amount > 100000) throw `🟥 *No puedes apostar oro más de 100000.*`
   let result = ''
    if (colour == color) {
        result = `${colour == 'red' ? 'La pelota aterrizó en 🔴' : 'La pelota aterrizó en ⚫'} \n\nTu Ganaste ${amount * 2} Coins`
        user.limit += amount * 2
    } else {
        result = `${colour == 'red' ? 'La pelota aterrizó en 🔴' : 'La pelota aterrizó en ⚫'} \n\nTu Perdiste ${amount} Coins`
        user.limit -= amount
    }
    m.reply(result)
}
handler.help = ['roulette <amount> <color(red/black)>']
handler.tags = ['game']
handler.command = ['roulette', 'rt', 'ruleta']

handler.group = true

export default handler
