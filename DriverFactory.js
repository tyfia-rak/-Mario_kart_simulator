const Mario = require('./Mario');
const Luigi = require('./Luigi');
const Peach = require('./Peach');

class DriverFactory {
    static createDriver(name) {
        switch(name.toLowerCase()) {
            case 'mario':
                return new Mario();
            case 'luigi':
                return new Luigi();
            case 'peach':
                return new Peach();
            default:
                throw new Error('Pilote inconnu. Choisissez Mario, Luigi ou Peach.');
        }
    }
}

module.exports = DriverFactory; 