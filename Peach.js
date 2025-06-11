const Driver = require('./Driver');
const PeachMoveStrategy = require('./PeachMoveStrategy');

class Peach extends Driver {
    constructor() {
        super('Peach', 3, 1, new PeachMoveStrategy());
    }
}

module.exports = Peach; 