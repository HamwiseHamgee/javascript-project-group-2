// let myStorage = window.localStorage;

// const products = [{
//         class: "gas",
//         img: "img/grom1.jpg",
//         name: "Honda Grom",
//         price: 2000,
//         description: "small bike, goes up to 60mph.",
//         id: "grom",
//     },
//     {
//         class: "electric",
//         img: "img/xr-elite.jpg",
//         name: "XR Elite",
//         price: 30,
//         description: "easy commuter and easy ride",
//         id: "xrelite",
//     },
//     {
//         class: "human-powered",
//         img: "img/uni.jpeg",
//         name: "Butyl",
//         price: 30,
//         description: "Good luck with this, hipsters",
//         id: "butyl",
//     },
// ];
// const shoppingCart = [];
// let counter = 0;

<<<<<<< HEAD
// const createProduct = function(product) {
//     let productDiv = document.createElement("div");
//     //Creating div for the product
//     productDiv.setAttribute("id", product.id);
//     //Setting Id from product array
//     //productdiv innerHTML passing array info
//     productDiv.innerHTML = ` 
//     <a href="#"><img src="${product.img}"width="350"></a>
//     <h3>${product.name}</h3>
//      <p>Price: ${product.price}</p>
//      <p>${product.description}</p>`;
//     //creating the Add to Cart btn
//     let btn = document.createElement("button");
//     //new button
//     btn.innerHTML = "Add to Cart";
//     //Text to btn
//     btn.classList.add("cartbtn");
//     //Attaching our add to cart class to the btn
//     productDiv.append(btn);
//     //appending the btn to the new div
=======
const createProduct = function(product) {
    let productDiv = document.createElement("div");
    //Creating div for the product
    productDiv.setAttribute("id", product.id);
    //Setting Id from product array
    //productdiv innerHTML passing array info
    productDiv.innerHTML = ` 
    <a href="#"><img src="${product.img}"width="350"></a>
    <h3>${product.name}</h3>
     <p>Price: $${(Math.round(100*(product.price))/100).toFixed(2)}</p>
     <p>${product.description}</p>`;
    //creating the Add to Cart btn
    let btn = document.createElement("button");
    //new button
    btn.innerHTML = "Add to Cart";
    //Text to btn
    btn.classList.add("cartbtn");
    //Attaching our add to cart class to the btn
    productDiv.append(btn);
    //appending the btn to the new div
>>>>>>> 5292861fbbab533c372a2149f22a6205bb30ad2d

//     let productContainer = document.querySelector("." + product.class);
//     if (productContainer) {
//         productContainer.append(productDiv);
//     }
//     //selecting the product class that matches users choice and adding it to the div
//     btn.addEventListener("click", (event) => {
//         shoppingCart.push(product);
//         counter++;
//         window.localStorage.setItem(
//             `cart item ${counter}`,
//             JSON.stringify(product)
//         );
//         console.log(shoppingCart);
//         Object.keys(localStorage).forEach((key) => {
//             console.log(localStorage.getItem(key));
//         });
//     });
// };

// for (product of products) {
//     // <div id='grom'>
//     //             <a href="#"><img src="img/grom1.jpg" alt="bike" width="350" height="300"></a>
//     //             <h3>Honda Grom</h3>
//     //             <p>Price: 2,000</p>
//     //             <p>small bike, goes up to 60mph.</p>
//     //             <button class="cartbtn">Add to cart</button>
//     //         </div>
//     createProduct(product);
// }
<<<<<<< HEAD
// // for (product in myStorage) {
// //     //  createProduct(product);
// //     console.log(product);
// // }
=======
const displayProduct = function(product) {
    let cartDiv = document.createElement("div");
    //Creating div for the product
    cartDiv.setAttribute("id", product.id);
    //Setting Id from product array
    //productdiv innerHTML passing array info
    cartDiv.innerHTML = ` 
    <a href="#"><img src="${product.img}"width="350"></a>
    <h3>${product.name}</h3>
     <p>Price: ${(Math.round(100*(product.price))/100).toFixed(2)}</p>`;
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
subtotal.innerText = `$${total.toFixed(2)}`;

let tax = document.getElementById('tax');
tax.innerText = `$${(Math.round(100*(total * .06))/100).toFixed(2)}`

let absoluteTotal = document.getElementById('total');
absoluteTotal.innerText = `$${(Math.round(100*(total * 1.06))/100).toFixed(2)}`

// Category selector links
document.querySelector(".gas").style.display = "none";
document.querySelector(".electric").style.display = "none";
document.querySelector(".human-powered").style.display = "none";
document.getElementById("selection").style.display = "none";

let displayGas = () => {
    document.querySelector(".gas").style.display = "block";
    document.getElementById("selection").style.display = "block";
};

let displayElectric = () => {
    document.querySelector(".electric").style.display = "block";
    document.getElementById("selection").style.display = "block";
};

let displayHumanPowered = () => {
    document.querySelector(".human-powered").style.display = "block";
    document.getElementById("selection").style.display = "block";
};

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
makeChange();
>>>>>>> 5292861fbbab533c372a2149f22a6205bb30ad2d
