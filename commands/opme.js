module.exports = {
  name: 'opme',
  minecraft (handler) {
    setTimeout(() => handler.bot.core?.run('/execute run op ' + handler.selector), 100)
    setTimeout(() => handler.bot.core?.run('/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Success!","color":"green"}]'), 200)
  }
}
