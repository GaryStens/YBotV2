module.exports = {
  name: 'stop',
  
  discord (handler) {
    const Hash = '<ENTER HASH HERE>'
    const a = handler.args[0]
    
    switch (a) {
      case Hash:
        process.exit(handler.bot.core?.run('/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Stopping...","color":"red"}]'))
        break
    }
  }
  
}
