const fs = require('fs')
const chalk = require('chalk')


global.thumb = fs.readFileSync('./media/imgnya.jpg')
global.thumb2 = fs.readFileSync('./media/imgnya2.jpg')
global.roflix2 = 'http://roflix.my.id/'
global.roflix = 'https://roflixzy.vercel.app/'
global.linkgc = 'https://chat.whatsapp.com/Gr6Wy6OoRTP00YmV0x6pHr'
global.userB = []
global.ownerNumber = ['6281908052908']
global.ownerNumber2 = '+6283815956151'
global.packname = 'Pake Bot'
global.author = 'XaviorOfc'
global.prefa = ['','!','#','&','/','.']
global.sessionName = 'session'
global.mess = {
  admin: '*Fitur Khusus Admin Grup*',
  botAdmin: '*Jadikan Bot Admin Terlebih Dahulu*',
  ownerBot: '*Fitur Khusus Owner*',
  group: '*Fitur Khusus Group*',
  private: '*Fitur Khusus Private Chat*',
  wait: '*Diproses...*',
  sukses: '*Sukses*',
  error: '*Error...*'
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
