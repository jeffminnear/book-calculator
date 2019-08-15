'use strict';
var expect = require('chai').expect;

var PriceCalculator = require('./price-calculator');

describe('PriceCalculator', function () {
    it('should exist', function () {
        expect(PriceCalculator).to.not.be.undefined;
    });

    it('should charge standard price for one book', function () {
        var purchasedBooks = [1];
        var totalCost = PriceCalculator.calculate(purchasedBooks);
        expect(totalCost).to.equal(8);
    });

    it('should charge standard price for multiple copies of the same book', function () {
        var purchasedBooks = [1,1,1,1];
        var totalCost = PriceCalculator.calculate(purchasedBooks);
        expect(totalCost).to.equal(32);
    });

    it('should apply a 5% discount on two different books', function () {
        var purchasedBooks = [1,2];
        var totalCost = PriceCalculator.calculate(purchasedBooks);
        expect(totalCost).to.equal(15.20);
    });

    it('should apply a 10% discount on three different books', function () {
        var purchasedBooks = [1,2,3];
        var totalCost = PriceCalculator.calculate(purchasedBooks);
        expect(totalCost).to.equal(21.60);
    });

    it('should apply a 20% discount on four different books', function () {
        var purchasedBooks = [1,2,3,4];
        var totalCost = PriceCalculator.calculate(purchasedBooks);
        expect(totalCost).to.equal(25.60)
    });

    it('should apply a 25% discount on all five books', function () {
        var purchasedBooks = [1,2,3,4,5];
        var totalCost = PriceCalculator.calculate(purchasedBooks);
        expect(totalCost).to.equal(30);
    });

    it('should not apply the discount to duplicate books', function () {
        var purchasedBooks = [1,1,2,3,4,5];
        var totalCost = PriceCalculator.calculate(purchasedBooks);
        expect(totalCost).to.equal(38);
    });

    it('should apply correct discounts to large orders with multiple sets', function () {
        var purchasedBooks = [1,2,3,1,2,3,4,1,2,3,4,5,1];
        var totalCost = PriceCalculator.calculate(purchasedBooks);
        expect(totalCost).to.equal(85.20);
    });
});