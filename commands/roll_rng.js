// David Bau's psuedo RNG seed generator importing seednrandom lib
module.exports.prngSim = function () {
            // random seeding for PRNG each usage
            // calls seedrandom() everytime new roll cmd is invoked for better PRNG
            var seedrandom = require("seedrandom"); // uses seedrandom pckg node.js
            var prng = seedrandom('added entropy.', { entropy: true }); // random as entropy
            // console.log(prng()); // console testing
            // use PRNG seed as boolean random
            var temp = prng();
            // console.log(temp);
            return temp;
 }