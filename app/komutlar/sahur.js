const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let yilbasi = new Date('2021-04-16 1:23:00')//yıl-ay-gün saat:dakika-saniye(3saat geri yaz)
    let time = ms(yilbasi - Date.now())

    message.channel.send(`Sahura  **${time.hours}** saat **${time.minutes}** dakika **${time.seconds}** saniye kaldı`)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahur'],
  permLevel: 0
};

exports.help = {
  name: 'sahur',

  description: 'sahur',
  usage: ''
};