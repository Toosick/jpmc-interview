const Calculator = require('./calculator');

class ScientificCalculator extends Calculator {
    sin(x) {
        return Math.sin(x)
    }

    cos(x) {
        return Math.cos(x)
    }

    tan(x) {
        return Math.tan(x)
    }

    log(x) {
        return Math.log(x)
    }
}

module.exports = ScientificCalculator;