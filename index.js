const Discord = require('discord.js')

const bot = new Discord.Client()

const token = 'NzE5ODY2MDIzMTc5NzE0Njkx.Xt9prg.J2g9791eOyiNfhKKIZRyCNc5ViU'

bot.login(token)
bot.on('ready', () => {
    console.log('Estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.content === 'Eae galera') {
        msg.reply('Bem vindo ao canal do pai!')
    }
})
