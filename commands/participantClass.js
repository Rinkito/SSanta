class Participant {
    constructor() {
        this.name = "";
        this.wish = "";
    }

    add_Name(n) {
        this.name = n;
    }

    add_Wish(w) {
        this.wish = w;
    }

    get_Name() {
        return this.name;
    }

    get_Wish() {
        return this.wish;
    }
}
module.exports = Participant;