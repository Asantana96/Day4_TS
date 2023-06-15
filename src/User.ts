import Item from './item';

class User {
  private cart: Item[];

  constructor() {
    this.cart = [];
  }

  public addToCart(item: Item): void {
    this.cart.push(item);
  }

  public removeFromCart(item: Item): void {
    const itemIndex = this.cart.indexOf(item);
    if (itemIndex > -1) {
      this.cart.splice(itemIndex, 1);
    }
  }

  public printCart(): void {
    console.log('Cart Contents:');
    for (const item of this.cart) {
      console.log(`${item.getName()} - ${item.getPrice()}`);
    }
  }
}

export default User;
