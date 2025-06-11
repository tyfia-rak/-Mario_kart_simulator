const Driver = require('./Driver');
const MarioMoveStrategy = require('./MarioMoveStrategy');

class Mario extends Driver {
    constructor() {
        super('Mario', 2, 2, new MarioMoveStrategy());
    }
}

module.exports = Mario;