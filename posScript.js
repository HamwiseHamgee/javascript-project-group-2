myStorage = window.localStorage;


const products = [{
        class: "gas",
        img: "img/grom1.jpg",
        name: "Honda Grom",
        price: 2000,
        description: "small bike, goes up to 60mph.",
        id: "grom",
    }, 
    {
        class: "electric",
        img: "img/xr-elite.jpg",
        name: "XR Elite",
        price: 30,
        description: "easy commuter and easy ride",
        id: "xrelite",
    },
    {
        class: "human-powered",
        img: "img/uni.jpeg",
        name: "Butyl",
        price: 30,
        description: "Good luck with this, hipsters",
        id: "butyl"
    }

]
const shoppingCart = [];


const createProduct = function(product) {
    let productDiv = document.createElement('div')
        //Creating div for the product
    productDiv.setAttribute("id", product.id)
        //Setting Id from product array
        //productdiv innerHTML passing array info
    productDiv.innerHTML = ` 
    <a href="#"><img src="${product.img}"width="350"></a>
    <h3>${product.name}</h3>
     <p>Price: ${product.price}</p>
     <p>${product.description}</p>`
        //creating the Add to Cart btn
    let btn = document.createElement('button');
    //new button
    btn.innerHTML = "Add to Cart";
    //Text to btn
    btn.classList.add('cartbtn')
        //Attaching our add to cart class to the btn
    productDiv.append(btn);
    //appending the btn to the new div

    document.querySelector('.' + product.class).append(productDiv);
    //selecting the product class that matches users choice and adding it to the div
    btn.addEventListener("click", event => {
        shoppingCart.push(product);
        console.log(shoppingCart);
        localStorage.setItem("cart", product);
    });

}
for (product of products) {
    // <div id='grom'>
    //             <a href="#"><img src="img/grom1.jpg" alt="bike" width="350" height="300"></a>
    //             <h3>Honda Grom</h3>
    //             <p>Price: 2,000</p>
    //             <p>small bike, goes up to 60mph.</p>
    //             <button class="cartbtn">Add to cart</button>
    //         </div>
    createProduct(product);

}

// Category selector links -- to do
// document.getElementById("gas").addEventListener("click", event => {
//     localStorage.setItem("gasClick");
//     console.log("Hello there");
// })
// console.log(localStorage.getItem("gasClick"));

// 
// document.querySelector(".gas").style.display = "none";
// document.querySelector(".electric").style.display = "none";
// document.querySelector(".human-powered").style.display = "none";

