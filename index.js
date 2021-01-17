const Discord = require("discord.js");
const { send } = require("process");
const token = require("./token.json")


const bot = new Discord.Client();


bot.on("ready", async () =>{
    console.log("Le bot est allumé");
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("être en dev");
    }, 100)
});

bot.on("guildMemberAdd", member => {
    member.send(`Bienvenue sur le serveur ${member.user.username}!`)
    member.roles.add('800152099098329088');

})

    bot.on("message", message => {

        if(message.content.startsWith("!clear")){
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


bot.login("MyToken");
