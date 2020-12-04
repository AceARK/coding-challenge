const groceries = [
 {
 "category": "beverage",
 "item": "Milk",
 "brand": "Jabron",
 "type": "Organic 2% Milk",
 "qty": 1
 },
 {
 "category": "pantry",
 "item": "Farfalle",
 "brand": "Micoy",
 "type": "Pasta",
 "qty": 3
 },
 {
 "category": "pantry",
 "item": "Linguini",
 "brand": "Micoy",
 "type": "Pasta",
 "qty": 2
 },
 {
 "category": "dairy",
 "item": "Yogurt",
 "brand": "Labels",
 "type": "Plain Non-Fat Greek Yogurt",
 "qty": 12
 },
 {
 "category": "produce",
 "item": "Apples",
 "brand": "Zambony",
 "type": "Honeycrisp",
 "qty": 6
 },
 {
 "category": "produce",
 "item": "Lemons",
 "brand": "KC",
 "type": "Pink Variegated",
 "qty": 6
 },
 {
 "category": "beverage",
 "item": "Water",
 "brand": "Switch",
 "type": "Grapefruit Sparkling Water",
 "qty": 8
 },
 {
 "category": "alcohol",
 "item": "Vodka",
 "brand": "Flamingo",
 "type": "L'Orange",
 "qty": 1
 }
]

const processGroceryJSON = groceryJSON => {
    // Iterate through groceries and send each obj to function groceryItemGenerator
    // Using for loop as opposed to forEach to prevent support issues in IE
    for(i=0; i<groceryJSON.length; i++) {
        let newGroceryListItemToDisplay = groceryListItemGenerator(groceryJSON[i]);
        document.querySelector('.container').appendChild(newGroceryListItemToDisplay);
    }
}

const groceryListItemGenerator = groceryObj => {
    // create div of class container__item with specified content displayed as in wf
    let groceryListItem = document.createElement('li');
    groceryListItem.setAttribute('class', 'container__item');
    // p - qty:qty, p with underline - item, p - brand+ type, p - category caps
    const quantityText = document.createTextNode(`qty: ${groceryObj.qty}`);
    const nameText = document.createTextNode(`${groceryObj.item}`);
    const descriptionText = document.createTextNode(`${groceryObj.brand} ${groceryObj.type}`);
    const categoryText = document.createTextNode(`${groceryObj.category}`);

    let quantityInfo = document.createElement('p');
    quantityInfo.setAttribute('class', 'container__item--qty');
    quantityInfo.appendChild(quantityText);
    groceryListItem.appendChild(quantityInfo);
    
    let name = document.createElement('p');
    name.setAttribute('class', 'container__item--name');
    name.appendChild(nameText);
    groceryListItem.appendChild(name);

    let description = document.createElement('p');
    description.setAttribute('class', 'container__item--description');
    description.appendChild(descriptionText);
    groceryListItem.appendChild(description);
    
    let category = document.createElement('p');
    category.setAttribute('class', 'container__item--category');
    category.appendChild(categoryText);
    groceryListItem.appendChild(category);  
    return groceryListItem; 
}

document.addEventListener('DOMContentLoaded', (event) => {
    processGroceryJSON(groceries);
});
