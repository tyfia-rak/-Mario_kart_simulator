const MoveStrategy = require('./MoveStrategy');

class MarioMoveStrategy extends MoveStrategy {
    move(driver, diceRoll) {
        if (diceRoll === 6 && driver.stability < 2) {
            console.log(`${driver.name} glisse et ne bouge pas !`);
            return driver.position;
        }
        return driver.position + driver.speed * diceRoll;
    }
}

module.exports = MarioMoveStrategy; 