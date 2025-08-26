import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"


const  myCart = [];

console.log("Welcome to the your Shopee Cart!\n ")

//criação dos itens
const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

//adicionando items
await cartService.addItem(myCart,item1);
await cartService.addItem(myCart, item2);

// await cartService.removerItem(myCart, 1)

await cartService.removerItem(myCart, item2)
await cartService.removerItem(myCart, item2)


await cartService.displayCart(myCart)

//removendo item
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart);