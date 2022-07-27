const { resize } = require('../util/image')
const path = require('path')
const sharp = require('sharp')

module.exports = {
  name: 'draw',
  async minecraft (handler) {
    const name = handler.args.join(' ').replaceAll(/§r/g, '')
    const fullpath = path.join(__dirname, '../images', name)
    const a = handler.args[0]
    
    switch (a) {
      case 'list':
        handler.bot.core?.run('/tellraw @a ["",{"text":"Image Files List","color":"light_purple"},{"text":":","color":"gray"},{"text":"\n\n"},{"text":"amogus.jpg\nship.jpg","color":"red"},{"text":"\n"},{"text":"cow.jpg","color":"dark_red"},{"text":"\n"},{"text":"youtube-invalid-video.jpg","color":"red"},{"text":"\n"},{"text":"glass-of-water.jpg","color":"dark_red"}]')
        break
      case '':
        handler.bot.core?.run(`/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Invaid arguments!","color":"gray"},{"text":"\n\n"},{"text":"Usage ","color":"red"},{"text":"- ","color":"dark_gray"},{"text":"${config.prefixes}draw [list, <file>]","color":"red"}]`}
        break
    }
    
    const image = await sharp(fullpath)

    const metadata = await image
      .metadata()

    const { width, height } = resize(metadata.width, metadata.height)

    const { data, info } = await image
      .resize({ fit: 'fill', kernel: 'nearest', width, height })
      .raw()
      .toBuffer({ resolveWithObject: true })

    handler.bot.draw(data, info)
  }
}
