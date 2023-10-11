// get elements 
const itemTotal = document.getElementsByClassName('item-total');
const total = document.getElementsByClassName('total')[0];
const number = document.getElementsByClassName('number');
const likeBtn = document.getElementsByClassName('like-btn');
const removeBtn = document.querySelectorAll('.remove-btn'); //here we need these elements to be in static position 
const cards = document.getElementsByClassName('item');

// prices of each item
const prices = {
    item1: 100,
    item2: 100,
    item3: 100,
};

// the defult number of each item
let numberOfItems = [1, 1, 1];

// calculate the total price for the first time
let totalCart = prices.item1 + prices.item2 + prices.item3;
total.innerText = `${totalCart}`;

for(let i = 0; i < numberOfItems.length; i++){
    // calculate total of each item.
    number[i].addEventListener('input', ()=> {
        let cardtotal = number[i].value * Object.values(prices)[i];
        itemTotal[i].innerText = `item total: ${cardtotal > 0 ? cardtotal : 0}`
        
    // Calculate the difference of the number of the item
    let difference = (number[i].value - numberOfItems[i]) * Object.values(prices)[i];

    // Add the difference to the total
    totalCart += difference;
    total.innerText = `${totalCart > 0 ? totalCart : 0}$`;

    // Update the number of the item
    numberOfItems[i] = number[i].value;
    })

    // activate the like button
    likeBtn[i].addEventListener('click', ()=>{
        likeBtn[i].children[0].classList.toggle('active');
        likeBtn[i].children[1].classList.toggle('active');
    })

    // remove an item from cart
    removeBtn[i].addEventListener('click', ()=>{
        let newtotal = number[i].value * Object.values(prices)[i];
        totalCart -= newtotal;
        total.innerText = `${totalCart > 0 ? totalCart : 0}$`;

        // remove the card
        cards[i].style.display = 'none';
    });
}
