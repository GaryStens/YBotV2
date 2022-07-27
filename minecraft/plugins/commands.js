const config = require('../../config.json')
const UnknownCommandError = require('../../errors/command/unknown')
const UnsupportedCommandError = require('../../errors/command/unsupported')
const MinecraftCommandHandler = require('../../command-handler/minecraft')
const loadFiles = require('../../util/load_files')
const path = require('path')

function inject (bot) {
  bot.commands = loadFiles(path.join(__dirname, '../../commands'))

  bot.on('message', async (username, message, sender) => {
    for (const prefix of config.prefixes) {
      if (!message.startsWith(prefix)) continue

      const raw = message.substr(prefix.length)

      const [commandName, ...args] = raw.split(' ')

      const handler = new MinecraftCommandHandler(bot, raw, args, prefix, username, sender)

      const command = bot.commands.find(command => command.name === commandName)

      if (command === undefined) {
        bot.core?.run(`/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"${commandName} ","color":"dark_purple"},{"text":"dosen't exist!","color":"red"}]`)

        return
      }

      if (command.minecraft === undefined) {
        bot.core?.run(`/tellraw @a ["",{"text":"YBotV2 ","color":"light_purple"},{"text":"\u25ba ","color":"dark_gray"},{"text":"${commandName} is only available in discord!","color":"red"}]`)

        return
      }

      try {
        await command.minecraft(handler)
      } catch (error) {
        handler.sendError(error)
      }
    }
  })
}

module.exports = { inject }
