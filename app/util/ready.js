const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const util = require("minecraft-server-util");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Bot ${client.user.username} ismi ile aktif`);
  client.user.setStatus("idle");
   setInterval(() => {
  util.statusBedrock("play.oyungg.net", { port: 19132 }).then(sw => {
    client.user.setActivity(`${sw.onlinePlayers} kişi sikiyle`);
  });
  }, 2000)
};