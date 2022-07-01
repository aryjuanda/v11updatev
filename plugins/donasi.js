let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0857-6200-8398]
│ •  [0812-6403-8909]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler