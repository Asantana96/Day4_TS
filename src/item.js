"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getQuantity = function () {
        return this.quantity;
    };
    Item.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return Item;
}());
exports.default = Item;
