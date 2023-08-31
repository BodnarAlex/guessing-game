class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.res = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() { 
        return this.res = Math.ceil((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.res;
    }

    greater() {
        this.min = this.res;
    }
}

module.exports = GuessingGame;
