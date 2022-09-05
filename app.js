const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json'); // Secure login info
// contains bot key. Test this by editing your own config.json file with your bot key.
// prefix is '!' and reduces the need to respecify & check for it in main js.

const client = new Discord.Client();
client.commands = new Discord.Collection();
// add all .js files in commands folder for use in program
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// this will clean up the main .js driver code and allow for any external files
// to be declared and defined outside main
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
// console output to make sure bot is live.
client.once('ready', () => {
	console.log('Ready!');
});

var cron = require("cron");
let squadBattle = new cron.CronJob('00 00 21 * * 1-6', () => {
	// reminder at 9pm pst every mon - sat to finish squad battle
	let channel = client.channels.cache.get("716153499892711454");
	// ping all users in channel
	channel.send('Remember to finish your **squad battles**, check squad attendance,' +
		' donate wing tokens to the squad~');
});
squadBattle.start(); // always run

// Discord bot's status message
client.on('ready', () => {
	client.user.setActivity('CS 311 Project', {
		type: 'Testing'
	});
});

// This will accept any file ending in .js in the commands folder, execute the command
// if found with correct parameters.
// no if/else chains! 
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot)
		return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command))
		return;
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply("Error in executing command. Check !help.");
	}
});

client.login(token);
