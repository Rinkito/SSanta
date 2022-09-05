var { prngSim } = require('./roll_rng'); // destructuring assignment
// equivalent to var prngSim = require(...).prngSim;
module.exports = {
	name: 'roll',
	description: 'Random yes / no ',
    execute(rmsg, args) {
        var bless = prngSim();
        // console.log(bless);
        // array of yes and no responses 0 - 9 index that will be randomly picked.
        var yes = ["Probably...", "Of course!", "Absolutely~", "For sure, my dude.",
            "That much is obvious.", "Go for it!", "Today is your lucky day.",
            "I would.", "Yes!", "Affirmative."]
        var no = ["Probably...not.", "No way!", "Never", "Misfortune beseeches you.",
            "Negative.", "I advise against that.", "Don't.",
            "Impossible.", "No!", "Unfortunate."]
        if (bless > 0.5) {
            // yes
            var pikr = Math.floor(prngSim() * 10); // 0 - 9 (max - min) + min
            // round down (Math.floor)
            rmsg.channel.send(yes[pikr]); // responses in an array for cleaner code
        }
        else { // no
            var pikr = Math.floor(prngSim() * 10); // want a new seed for yes & no
            rmsg.channel.send(no[pikr]);
        }
    },
};
