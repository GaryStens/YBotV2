const wikipedia = require('wikipedia')

module.exports = {
  name: 'wikipedia',
  async minecraft (handler) {
    const topic = handler.args.join(' ')
    const a = handler.args[0]
    const empty = handler.args[0]
    
    switch (a) {
      case empty:
        handler.bot.core?.run('/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Provide a topic name.","color":"gray"}]')
    }

    const page = await wikipedia.page(topic)

    const summary = await page.summary()

    handler.sendMessage(summary.extract, '@a')
  }
}
