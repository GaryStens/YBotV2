const { selectUsername } = require('../util/player')

module.exports = {
  name: 'cum',
  minecraft (handler) {
    setTimeout(() => handler.bot.core?.run(`minecraft:give ${selectUsername(handler.bot, handler.sender)} potion{display:{Name:'{"text":"Cum","italic":false}'},CustomPotionColor:16777215}`), 100)
    setTimeout(() => handler.bot.core?.run(`/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Happy cumming!","color":"gray"}]`), 200)
  }
}
