const withExponents = function withExponents() {
    Object.assign(this, {
        pow(base, exponent) {
            return Math.pow(base, exponent);
        },

        multiplyExp(lhs, rhs) {
            return this.multiply(this.pow(...lhs), this.pow(...rhs));
        },

        divideExp(lhs, rhs) {
            return this.divide(this.pow(...lhs), this.pow(...rhs));
        }
    });
};

module.exports = withExponents;