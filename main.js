let myStorage = window.localStorage;

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


const products = [{
        class: "gas",
        img: "img/grom1.jpg",
        name: "Honda Grom",
        price: 2000,
        description: "Small bike for little baby buhbuhs.",
        id: "grom"
    },
    {
        class: "gas",
        img: "img/vespagtssuper.jpg",
        name: "Vespa GTS Super",
        price: 28,
        description: "Feel like an Italian! Or a mod!",
        id: "gtssuper"
    },
    {
        class: "gas",
        img: "img/hondacb750.png",
        name: "Honda CB750",
        price: 6.78,
        description: "Honestly we're not really sure if this one still works, but you can rent it I guess.",
        id: "cb750"
    },
    {
        class: "gas",
        img: "img/harleysoftail.jpg",
        name: "Harley Davidson Softail",
        price: 68.99,
        description: "An American classic for divorced dads and retirees!",
        id: "softail"
    },
    {
        class: "electric",
        img: "img/xr-elite.jpg",
        name: "XR Elite",
        price: 30,
        description: "Easy commuter and easy ride! DON'T RENT BIRD SCOOTERS, WE'RE WAY BETTER",
        id: "xrelite"
    },
    {
        class: "electric",
        img: "img/radrunner.jpg",
        name: "Rad Power Bikes RadRunner 1",
        price: 15,
        description: "The RadRunner: for cyclists who don't want to exercise.",
        id: "radrunner"
    },
    {
        class: "electric",
        img: "img/onewheelxr.jpg",
        name: "One Wheel XR",
        price: 40,
        description: "If your name is Sam, DO NOT RENT THIS. If you ride it you will break your leg.",
        id: "onewheel"
    },
    // {
    //     class: "electric",

    // },
    {
        class: "human-powered",
        img: "img/uni.jpeg",
        name: "Butyl",
        price: 30,
        description: "Good luck with this, hipsters",
        id: "butyl"
    },
];
const shoppingCart = [];
let counter = 0;

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

    let productContainer = document.querySelector("." + product.class);
    if (productContainer) {
        productContainer.append(productDiv);
    }
    //selecting the product class that matches users choice and adding it to the div
    btn.addEventListener("click", (event) => {
        shoppingCart.push(product);
        counter++;
        window.localStorage.setItem(
            `cart item ${counter}`,
            JSON.stringify(product)
        );
        console.log(shoppingCart);
        Object.keys(localStorage).forEach((key) => {
            console.log(localStorage.getItem(key));
        });
    });
};

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