import { itemForm, itemName, itemAmount, itemPrice, itemContainer, overallPriceEl } from './dom-utils';
import { ShoppingItem, addItemToShoppingList, getOverallPrice, getShoppingList } from './state';
// CSS IMPORT IN TS NUR ÜBER VITE MÖGLICH
import './styles/styles.css';

//Our startup logic for the application
function initApplication(){
//itemForm!. -> muss es geben
//itemForm?. -> kann sein das es itemForm nicht gibt, oder es gibt vielleicht
    itemForm.addEventListener("submit", (e: SubmitEvent) =>{
        e.preventDefault();

        const shoppingItem: ShoppingItem = {
            name: itemName.value,
            amount: itemAmount.valueAsNumber,
            price: itemPrice.valueAsNumber,
            id: "eineid"
        };


        addItemToShoppingList(shoppingItem);
        renderShoppingList();
    });
    renderShoppingList();
}

function renderShoppingList(){
    //console.log(getShoppingList());

    //reset the container
    itemContainer.innerHTML=" ";
    getShoppingList().forEach((item) => {
    const container = document.createElement("div");
    container.classList.add("shoppingitem");
    container.innerHTML = `<p> ${item.amount} ${item.name} für ${formatNumberToEuro(item.price)} : ${formatNumberToEuro(item.price*item.amount)} </p>`;
    //mount to the DOM
    itemContainer.appendChild(container);
    });

    //render overall price
    const price = getOverallPrice();
    overallPriceEl.innerHTML = `${formatNumberToEuro(price)}`;

}

function formatNumberToEuro(val: number){
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val)
}


initApplication();


