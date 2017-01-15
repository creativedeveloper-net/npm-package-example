module.exports = {
    sum: function() {
        function sum_helper(a, b) {
            return a + b;
        }
        return Array.prototype.slice.call(arguments).reduce(sum_helper, 0);
    }
};