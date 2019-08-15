module.exports = {
    calculate: function (purchasedBooks) {
        var sets = [];
        
        while (purchasedBooks.length > 0) {
            var uniqueBooks = [];
            var individualTitles = {};
            for (var i = purchasedBooks.length - 1; i >= 0; i--) {
                if (!individualTitles[purchasedBooks[i]]) {
                    individualTitles[purchasedBooks[i]] = purchasedBooks[i];
                    uniqueBooks.push(purchasedBooks.splice(i, 1)[0]);
                }
            }
            sets.push(uniqueBooks);
        }

        var totalPrice = 0;

        sets.forEach(set => {
            var discount = this.getDiscount(set);
            var priceOfSet = (set.length * 8) * (1 - discount);
            totalPrice += priceOfSet;
        });

        return totalPrice;
    },
    getDiscount: function (books) {
        switch (books.length) {
            case 1:
                return 0;
            case 2:
                return 0.05;
            case 3:
                return 0.1;
            case 4:
                return 0.2;
            case 5:
                return 0.25;
            default:
                return 0;
        }
    }
}