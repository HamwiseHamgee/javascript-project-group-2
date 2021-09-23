let myStorage = window.localStorage;

const displayProduct = function(product) {
    let receiptDiv = document.createElement("div");
    //Creating div for the product
    receiptDiv.setAttribute("id", product.id);
    //Setting Id from product array
    //productdiv innerHTML passing array info
    receiptDiv.innerHTML = ` 
     
    <h3>${product.name}</h3>
    <p>Price: $${(Math.round(100*(product.price))/100).toFixed(2)}</p>`;
    let cartContainer = document.querySelector("#receipt");
    if (cartContainer) {
        cartContainer.append(receiptDiv);
    }
};
let total = 0;

for (const key in myStorage) {
    if (Object.hasOwnProperty.call(myStorage, key)) {
        const element = myStorage[key];
        console.log(element);
        const product = JSON.parse(element);
        displayProduct(product);
        total += product.price;
    }
}

let subtotal = document.getElementById('subTotal');
subtotal.innerText = `Subtotal: $${total.toFixed(2)}`;

let tax = document.getElementById('tax');
tax.innerText = `Tax: $${(Math.round(100*(total * .06))/100).toFixed(2)}`

let absoluteTotal = document.getElementById('total');
absoluteTotal.innerText = `Total Paid: $${(Math.round(100*(total * 1.06))/100).toFixed(2)}`