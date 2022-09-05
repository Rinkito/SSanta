const LinkedList = require("./llClass.js");

module.exports = {
    name: 'test2',
    description: 'test2',
    execute(message, args) {
        const ll = new LinkedList();
        for (let i = 0; i < args.length; i++) {
            ll.add(parseInt(args[i]));
        }
        message.channel.send(ll.print());
        message.channel.sent("Deleting 1...");
        ll.remove(1);
        message.channel.send(ll.print());
    }
}