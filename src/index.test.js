var expect = require('chai').expect;
var sum = require('./index').sum;

describe("sum", function(){
    it("should return sum of two numbers passed", function(){
        expect(sum(1,2)).to.equal(3);
    });
    it("if there is no arguments it should return 0", function(){
        expect(sum()).to.equal(0);
    });
    it("should return sum of passed arguments", function(){
        var args = [];
        var n = 1000;
        var expected_sum = 0;
        for (var i = 0; i <= n; i++) {
            args.push(i);
            expected_sum += i;
        }

        expect(sum.apply(this, args)).to.equal(expected_sum);
    });
});