const Driver = require('./Driver');
const LuigiMoveStrategy = require('./LuigiMoveStrategy');

class Luigi extends Driver {
    constructor() {
        super('Luigi', 1, 3, new LuigiMoveStrategy());
    }
}

module.exports = Luigi;