const Discord = require("discord.js");
const { send } = require("process");
const token = require("./token.json")


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


bot.login("MyToken");
