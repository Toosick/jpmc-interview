class Calculator {
    add(lhs, rhs) {
        return lhs + rhs;
    }

    subtract(lhs, rhs) {
        return lhs - rhs;
    }

    multiply(lhs, rhs) {
        return lhs * rhs;
    }

    divide(lhs , rhs) {
        if (rhs === 0 || isNaN(rhs)) {
            return NaN;
        }else {
            return lhs / rhs;
        }
    }
}

module.exports = Calculator;