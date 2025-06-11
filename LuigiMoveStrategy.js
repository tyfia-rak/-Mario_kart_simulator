const MoveStrategy = require('./MoveStrategy');

class LuigiMoveStrategy extends MoveStrategy {
    move(driver, diceRoll) {
        return driver.position + driver.speed * diceRoll;
    }
}

module.exports = LuigiMoveStrategy; 