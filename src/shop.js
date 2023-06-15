"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shop = /** @class */ (function () {
    function Shop() {
        this.users = [];
    }
    Shop.prototype.registerUser = function (user) {
        this.users.push(user);
    };
    Shop.prototype.unregisterUser = function (user) {
        var userIndex = this.users.indexOf(user);
        if (userIndex > -1) {
            this.users.splice(userIndex, 1);
        }
    };
    Shop.prototype.sellItem = function (item, quantity) {
        item.setQuantity(item.getQuantity() - quantity);
    };
    return Shop;
}());
exports.default = Shop;
