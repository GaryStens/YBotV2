module.exports = {
  name: 'clearchat',
  minecraft (handler) {
    handler.sendMessage([
      {
        text: '\n'.repeat(100)
      },
      {
        text: 'YBot ',
        color: 'light_purple',
        bold: false
      },
      {
        text: '► ',
        color: 'dark_gray',
        bold: false
      },
      {
        text: 'Successfully cleared the chat!',
        color: 'aqua',
        bold: false
      }
    ], '@a')
  }
}
