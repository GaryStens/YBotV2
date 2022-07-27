module.exports = {
  name: 'uuid',
  minecraft (handler) {
    handler.bot.core?.run('/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Your uuid is ","color":"gray"},{"text":"${}","color":"red"}]')
  }
}
