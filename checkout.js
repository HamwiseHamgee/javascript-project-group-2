let myStorage = window.localStorage;

const displayProduct = function(product) {
    let cartDiv = document.createElement("div");
    //Creating div for the product
    cartDiv.setAttribute("id", product.id);
    //Setting Id from product array
    //productdiv innerHTML passing array info
    cartDiv.innerHTML = ` 
    <a href="#"><img src="${product.img}"width="350"></a>
    <h3>${product.name}</h3>
     <p>Price: ${product.price}</p>`;
    let cartContainer = document.querySelector("#cart");
    if (cartContainer) {
        cartContainer.append(cartDiv);
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
subtotal.innerText = `$${total}`;

let tax = document.getElementById('tax');
tax.innerText = `$${Math.round(100*(total * .06))/100}`

let absoluteTotal = document.getElementById('total');
absoluteTotal.innerText = `$${Math.round(100*(total * 1.06))/100}`




function displayCard() {
    var x = document.getElementById("cardinfo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function displayCash() {
    var x = document.getElementById("cash");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function makeChange() {
    let cash1 = Number(document.getElementById('money').value);
    let price1 = Math.round(100 * (total * 1.06)) / 100;
    if (price1 === cash1) {
        console.log("no change");
    } else if (cash1 != null && price1 > cash1) {
        console.log("need more money");
    } else if (cash1 > price1) {
        let result = Math.round(100 * (cash1 - price1)) / 100;
        console.log(result + " is your change");
    }
}