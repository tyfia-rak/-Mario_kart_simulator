class Driver {
    constructor(name, speed, stability, moveStrategy) {
        this.name = name;
        this.speed = speed;
        this.stability = stability;
        this.position = 0;
        this.moveStrategy = moveStrategy;
    }

    move(diceRoll) {
        this.position = this.moveStrategy.move(this, diceRoll);
    }
}

module.exports = Driver; 