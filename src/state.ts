export interface ShoppingItem{
    name: string;
    amount: number;
    price: number;
    id: string;
}

let shoppingItems: Array<ShoppingItem> = [];

let overallPrice = 0;

export function addItemToShoppingList(item: ShoppingItem){
    shoppingItems.push(item);
    
    //recalculate overallprice
    overallPrice = 0;
    shoppingItems.forEach(item => {
        //preis = preis + itempreis * menge
        overallPrice = overallPrice + item.price * item.amount;
    });

}

export function getOverallPrice(){
    return overallPrice;
}

export function getShoppingList(){
    return [...shoppingItems];
}