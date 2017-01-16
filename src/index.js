function sumHelper(a, b) {
    return a + b;
}

module.exports = {
    sum: function() {
        return Array.prototype.slice.call(arguments).reduce(sumHelper, 0);
    },
    sumES6: function() {
        return Array.from(arguments).reduce(sumHelper, 0);
    }
};