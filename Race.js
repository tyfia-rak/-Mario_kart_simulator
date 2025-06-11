const readline = require('readline');

class Race {
    constructor(driver) {
        this.driver = driver;
        this.trackLength = 20;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    async play() {
        console.log(`La course commence avec ${this.driver.name} !`);
        
        while (this.driver.position < this.trackLength) {
            await new Promise(resolve => {
                this.rl.question('Appuyez sur Entrée pour lancer le dé...', () => {
                    const dice = this.rollDice();
                    console.log(`Dé lancé : ${dice}`);
                    
                    const oldPosition = this.driver.position;
                    this.driver.move(dice);
                    
                    if (this.driver.position > this.trackLength) {
                        this.driver.position = this.trackLength;
                    }
                    
                    if (this.driver.position >= this.trackLength) {
                        console.log(`${this.driver.name} a gagné la course !`);
                        this.rl.close();
                        resolve();
                    } else {
                        console.log(`${this.driver.name} passe de ${oldPosition} à ${this.driver.position}\n`);
                        resolve();
                    }
                });
            });
        }
    }
}

module.exports = Race; 