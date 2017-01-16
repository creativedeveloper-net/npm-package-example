function sum_helper(a, b) {
    return a + b;
}

module.exports = {
    sum: function() {
        return Array.prototype.slice.call(arguments).reduce(sum_helper, 0);
    },
    sumES6: function() {
        return Array.from(arguments).reduce(sum_helper, 0);
    }
};