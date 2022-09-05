const fs = require("fs");
const Participant = require("./participantClass.js");
var { prngSim } = require('./roll_rng'); // destructuring assignment
module.exports = {
    name: 'test',
    description: 'test',
    execute(message, args) {
        if (args[0] == "add") {
            let p = new Participant();
            //let name = message.author.tag;
            p.add_Name(args[1]);
            // 1 string value
            let s = " ";
            for (let i = 2; i < args.length; i++) {
                s += args[i];
                if (i + 1 < args.length) {
                    s += ", ";
                }
            }
            p.add_Wish(s);
            const data = fs.readFileSync("./participants.json");
            if (data.length == 0) {
                fs.writeFileSync("./participants.json", JSON.stringify([p], null, 2));
            }
            else {
                // object exists in file
                const fileData = JSON.parse(fs.readFileSync("./participants.json"));
                // parse all objects contained in file
                // add to object array
                fileData.push(p);
                // write back to file entire object array
                fs.writeFileSync("./participants.json", JSON.stringify(fileData, null, 2));
            }
        }
        else if (args[0] == "match") {
            const all_obj = eval(JSON.stringify(JSON.parse(fs.readFileSync("./participants.json"))));
            const m = fs.readFileSync("./match.txt");
            let b = false;
            try {
                for (let j = 0; j < all_obj.length; j++) {
                    if (all_obj[j].name == args[1] && !m.includes(args[1])) {
                        b = true;
                        let match = Math.floor(prngSim() * all_obj.length - 1); // 0 - array.length-1
                        let avail = all_obj.length;
                        while ((all_obj[match].name == args[1] || m.includes(all_obj[match].name)) && avail != 0) {
                            
                            match = Math.floor(prngSim() * all_obj.length);
                            
                            avail -= 1;
                        }
                        if (avail == 0) {
                            message.channel.send("No available matches.");
                        }
                        else {
                            //fs.appendFileSync("./match.txt", all_obj[match].name + "\r\n");
                            message.channel.send("Your secret santa is: " + all_obj[match].name);
                            message.channel.send("Wishes: " + all_obj[match].wish);
                        }
                        // append name to file
                        if (m.length == 0) {
                            // create new txt file & add name
                            fs.writeFileSync("./match.txt", all_obj[match].name + "\r\n");
                        }
                        else {
                            fs.appendFileSync("./match.txt", all_obj[match].name + "\r\n");
                        }
                    }
                }
                if (!b) {
                    if (m.includes(args[1])) {
                        throw "You have already been matched!";
                    }
                    else {
                        throw "You are not a participant!";
                    }
                }
            }
            catch (err) {
                return message.channel.send(err || "Error.");
            }
        }
        else if (args[0] == "clear") {
            console.log("clear");
        }
        else {
            console.log("DONE HERE");
        }
    }
}