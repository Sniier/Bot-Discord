const Discord = require("discord.js");
const { send } = require("process");
const token = require("./token.json")
const moment = require('moment');

const bot = new Discord.Client();


bot.on("message", message => {

    if(message.content.startsWith("/clear")){
        message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES')){
        
            let args = message.content.trimStart().split(/ +/g);

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

                    message.channel.bulkDelete(args[1])
                    message.channel.send(`vous avez supprimé ${args[1]} message(s)`)
    
                }
                else(
                    message.channel.send(`vous devez indiquer une valeur de 1 à 99 !`)
                )
            }
            else{
                message.channel.send("vous devez indiquer un nombre a supprimer !")
            }
        }
        else(
            message.channel.send("vous devez avoir la permission de gérer les messages pour éxecuter cette commande !")
        )
    }
})

bot.on("message", message => {

if (message.content.startsWith("/info")) {
    if(message.mentions.user.first()) {
        user = message.mentions.user.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);

    const embed = new Discord.MessageEmbed()
    .setColor('#ff5555')
    .setThumbnail(user.avatarURL)
    .setTitle(`Information sur ${user.username}#${user.discriminator} :`)
    .addField('ID du compte:', `${user.id}`, true)
    .addField('Pseudo sur le serveur :', `${member.nickname !== null ? `${memeber.nickname}` : 'Aucun'}`, true)
    .addField('A crée le compte le :', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
    .addField('A rejoin le serveur le :', `${moment.utc(member.JoinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true
    .addField('Status :', `${user.presence.status}`, true)
    .addField('Joue à :', `${user.presence.game ? user.presence.game.name : 'Rien'}`, true)
    .addField('Roles :', member.roles.cache.map(roles => `${roles.name}`).join(', '), true)
    .addField('En réponse a :', `${message.author.username}#${message.author.discriminator}`)
,message.channel.send(embed).then(message => message.delete({ timeout: 15000 })));
}

bot.on('message', msg => {
    if (msg.content === 'yamete') {
      msg.reply('Kudasai!');
    }
  });

  bot.on('message', msg => {
    if (msg.content === 'SMAAAAAAAAAASH') {
      msg.reply('OH YOU WINNNNNNNNNN !');
    }
  });

  bot.on('message', msg => {
    if (msg.content === 'Oh im loose !') {
      msg.reply('OH IM WINNNNNNNNNN !');
    }
  });

  bot.on('message', msg => {
    if (msg.content === 'Jme fais vraiment chier a se point la ??') {
      msg.reply('EASTER EGGS !');
    }
  });

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

  bot.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });

  bot.on('message', msg => {
    if (msg.content === 'sa lag') {
      msg.reply('IL Y A DU PING!');
    }
  });
  
  bot.on('message', msg => {
    if (msg.content === 'quoi') {
      msg.reply('Feur!');
    }
  });

  bot.on('message', msg => {
    if (msg.content === 'non') {
      msg.reply('bril!');
    }
  });

bot.on("ready", async () =>{
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("être l'esclave de 𝑺𝒏𝒊𝒊𝒆𝒓ツ#8825");
    }, 150)
});

bot.on("guildMemberAdd", member => {
    member.send(`Bienvenue sur le serveur ${member.user.username}!`)
    member.roles.add('800152099098329088');

})


bot.login(token.token)});
