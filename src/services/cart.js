/* Quais ações meu carrinho pode fazer
CASOS DE USO

1-adicionar
2-deletar item do carrinho
3-remover um item
4- calcular o total
*/

//adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
} 


//calcular total do carrinho
async function calculateTotal (userCart) {
   const result = userCart.reduce((total, item) => total +  item.subtotal(), 0)
   console.log(`\nShopee Cart Total is: ${result}`);
   
}

//deletar item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name ===  name)

    if(index !== -1){
        userCart.splice(index, 1)
    };
};

//remover um item
// async function removerItem(userCart, index) {
//     // transforma o index visual do visual para o index do back end
//     const deleteindex = index - 1;

//     if(index >= 0 && index < userCart.length){
//         userCart.splice(deleteindex, 1)
        
//     }
// }

async function removerItem(userCart, item) {
   const indexFound = userCart.findIndex((p) => p.name === item.name)
   console.log("item encontrado no " + indexFound)
   console.log(indexFound)


   //caso não encontre o item

   if(indexFound == -1){
    console.log("item não encontrado");
    return;
   }

   // item > 1 subtrair um item
   if (userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1;
    return;
} 

// item = 1 deletar o item
if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1);
}



}

async function displayCart(userCart){
    console.log("Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Quantidade: ${item.quantity}X | Subtotal: ${item.subtotal()}`)
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removerItem,
    displayCart,
}