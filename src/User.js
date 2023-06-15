"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.cart = [];
    }
    User.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    User.prototype.removeFromCart = function (item) {
        var itemIndex = this.cart.indexOf(item);
        if (itemIndex > -1) {
            this.cart.splice(itemIndex, 1);
        }
    };
    User.prototype.printCart = function () {
        console.log('Cart Contents:');
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("".concat(item.getName(), " - ").concat(item.getPrice()));
        }
    };
    return User;
}());
exports.default = User;
