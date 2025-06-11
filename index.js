const readline = require('readline');
const DriverFactory = require('./DriverFactory');
const Race = require('./Race');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function startGame() {
    try {
        const answer = await new Promise(resolve => {
            rl.question('Choisissez votre pilote (Mario, Luigi, Peach) : ', resolve);
        });

        const driver = DriverFactory.createDriver(answer);
        rl.close();

        const race = new Race(driver);
        await race.play();
    } catch (error) {
        console.error('Erreur :', error.message);
        rl.close();
    }
}

startGame(); 