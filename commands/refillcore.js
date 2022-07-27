module.exports = {
  name: 'refillcore',
  minecraft (handler) {
    setTimeout(() => handler.bot.core.fillCore(), 100)
    setTimeout(() => handler.bot.core?.run('/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Successfully refilled core!","color":"gray"},{"text":" (DISCORD)","color":"blue"}]'), 200)
  },
  discord (handler) {
    setTimeout(() => handler.bot.core.fillCore(), 100)
    setTimeout(() => handler.bot.core?.run('/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Successfully refilled core!","color":"gray"},{"text":" (DISCORD)","color":"blue"}]'), 200)
  }
}
