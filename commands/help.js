const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: 'help',
  minecraft (handler) {
    const message = []

    for (const command of handler.bot.commands) {
      message.push({
        text: config.prefixes + '' + command.name,
        color: 'light_purple',
        hoverEvent: {
          action: 'show_text',
          contents: [
            {
              text: 'Name',
              color: 'blue'
            },
            {
              text: ': ',
              color: 'white'
            },
            {
              text: command.name,
              color: 'white'
            },
            '\n',
            {
              text: 'Supported',
              color: 'blue'
            },
            {
              text: ': ',
              color: 'white'
            },
            {
              text: command.minecraft ? 'yes' : 'no',
              color: command.minecraft ? 'light_purple' : 'dark_purple'
            }
          ]
        }
      })

      message.push(' ')
    }

    message.pop()

    setTimeout(() => handler.sendMessage(message, '@a'), 100)
    setTimeout(() => handler.bot.core?.run('/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"Hover ","color":"light_purple"},{"text":"your mouse in order to show information (if it's supported or not)","color":"gray"}]'), 200)
  },
  discord (handler) {
    const embed = new EmbedBuilder()
      .setTitle('Commands')
      .setDescription(handler.bot.commands.map(command => `\`${command.name}\``).join('|'))

    handler.sendEmbeds(embed)
  },
  color (command) {
    let color = 'green'

    if (!command.minecraft) color = 'yellow'

    return color
  }
}
