
module.exports = {
    name: 'about',
    description: 'About the bot ',
    execute(rmsg, args) {
        rmsg.channel.send("Created by: Akio  and written in Javascript.\n Built with `Node.js 12.18.3` - *runtime*" +
            " & `discord.js 12.5.1` - *Discord library*\nThis bot allows users to stay" +
            " relevant in squadron duties by pinging everyone with the Exos Heroes role and reminding them to " +
            "finish their battles every Monday - Saturday at 9PM PST. It will also ping the Deputy Master and " +
            "Deputy First Mate to remind them to enroll in the week's squadron battle every Sunday at 1PM PST. " +
            "New features will be added in the near future. Thank you for using the EHT bot.")
    }
};