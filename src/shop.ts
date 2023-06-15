import User from './User';
import Item from './item';
class Shop {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public registerUser(user: User): void {
    this.users.push(user);
  }

  public unregisterUser(user: User): void {
    const userIndex = this.users.indexOf(user);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
    }
  }

  public sellItem(item: Item, quantity: number): void {
    item.setQuantity(item.getQuantity() - quantity);
  }
}
//---
export default Shop;
