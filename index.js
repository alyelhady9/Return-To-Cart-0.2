let signinBtn = document.querySelector(".sign-in")
let backgroundLayer = document.querySelector(".sign-in-background-layer")
let loginBtnRe = document.querySelector(".log-in-redirect")
let signinBtnRe = document.querySelector(".sign-in-redirect")
let loginPanel = document.querySelector(".log-in-form")
let signinPanel = document.querySelector(".sign-in-form")
let loginCloseBtn = document.querySelector(".close-background-layer")

signinBtn.addEventListener("click", () => {
    if (backgroundLayer.style.disply="none") {
        backgroundLayer.classList.add("appear")
        backgroundLayer.classList.remove("disappear")
    } else {
        
        backgroundLayer.classList.add("disappear")
    }
})

loginCloseBtn.addEventListener("click", () => {
    if (backgroundLayer.className.includes("appear")) {
        backgroundLayer.classList.remove("appear")
        backgroundLayer.classList.add("disappear")
    } else {
        
        backgroundLayer.classList.add("appear")
    
    }
})

loginBtnRe.addEventListener("click",() => {
    if (loginPanel.style.display="none") {
        loginPanel.classList.add("appear")
        loginPanel.classList.remove("disappear")
        signinPanel.classList.add("disappear")
        signinPanel.classList.remove("appear")
    }else {
        loginPanel.classList.add("appear")
    }
})
signinBtnRe.addEventListener("click",() => {
    if (signinPanel.style.display="none") {
        signinPanel.classList.add("appear")
        signinPanel.classList.remove("disappear")
        loginPanel.classList.add("disappear")
        loginPanel.classList.remove("appear")
    }else {
        signinPanel.classList.add("appear")
    }
})

let cartBtn = document.querySelector(".cart-btn")
let cart = document.querySelector(".cart")
let cartBackground = document.querySelector(".cart-background-layer")
let cartParent = document.querySelector(".cart-screen")

cartBtn.addEventListener("click", () => {
   if (cart.className.includes("cart")) {
       cart.classList.add("cart-opened")
       cart.classList.remove("cart-closed")
       cartBackground.classList.add("appear")
       cartBackground.classList.remove("disappear")
       
   }else {
       cartBackground.classList.add("disappear")
       cartBackground.classList.remove("appear")
       
   }
})
cartBackground.addEventListener("click", () => {
    if (cart.className.includes("cart-opened")) {
        cart.classList.add("cart-closed")
        cart.classList.remove("cart-opened")
       
       cartBackground.classList.add("disappear")
       cartBackground.classList.remove("appear")
    } else {
        cart.classList.add("cart-closed")

    }
})


let phoneHeader = document.querySelector(".main-header")
let menuBtn = document.querySelector(".bars")
let root = document.querySelector(".root")


root.addEventListener("click", ()=> {
    if (phoneHeader.className.includes("header-on")) {
        
        phoneHeader.classList.add("header-off")
        phoneHeader.classList.remove("header-on")

    }
})
menuBtn.addEventListener("click", () => {
    if (phoneHeader.className.includes("main-header")) {
        phoneHeader.classList.add("header-on")
        phoneHeader.classList.remove("header-off")
    }else {
        
    }
})

let product = [
    {
        id:0,
        image:'Images/AppleAirPodsPro2ndGeneration.jpg',
        title: "Apple AirPods Pro (2nd Generation)",
        price: 300,
    },
    {
        id:1,
        image:'Images/AirJordan1HiFlyEaseMensShoes.jpg',
        title: "Air Jordan 1 Hi FlyEase Men's Shoes ",
        price: 150,
    },
    {
        id:2,
        image:'Images/ThinkBook.jpg',
        title: "ThinkBook 16 Gen 4 (16 Intel)  Portable, powerful, big-screen ",
        price: 1000,
    },
    {
       id:3,
        image:'Images/MenssurfingshortDecathlon.jpg',
        title: "Mens surfing short-sleeve anti-UV WATER T-SHIRT - Black - Decathlon ",
        price: 30,
    },
    {
       id:4,
        image:'Images/samsung23ultra.jpg',
        title: "Samsung Galaxy S23 Ultra, 256GB, Phantom Black, 5G Mobile Phone, Dual SIM, Android Smartphone",
        price: 990,
    },
    {
       id:5,
        image:'Images/usb.jpg',
        title: "Type-C USB Male to USB Female Converter ",
        price: 7,
    },
    {
       id:6,
        image:'Images/watch.jpg',
        title: "A ALPS Watches, Men's Watches Mechanical Hand-Winding Skeleton Classic Business",
        price: 2000,
    },
    {
       id:5,
        image:'Images/ring.jpg',
        title: "Amazon.com: Womens 1.5 Carat Sterling Silver 925 Engagement",
        price: 1229,
    },
]

let categories = [...new Set(product.map((item) => {return item}))]

let i=0

document.querySelector(".root").innerHTML = categories.map((item) => 
{
    let {image, title, price} = item
    return(
        
        `<div class='box'>
            
                <div class='img-box'>
                    <img src=${image} class='images'></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>` +
                    "<button onclick='addToCart("+(i++)+")'>Add to cart </button>" +
                `</div>
            
        </div> `
    )


}).join('')


let cartCon = []
function addToCart(a){
    cartCon.push({...categories[a]})
    displayCart()
}
function delElement(a) {
    cartCon.splice(a,1)
    displayCart()
}
function displayCart(a) {
    let j = 0, total=0
    document.querySelector(".total-value").innerHTML="$ "+0+" .00"
    document.querySelector(".cart-counter").innerHTML=cartCon.length
    
    if(cartCon.length==0) {
        document.querySelector(".cart-main").innerHTML = "Your cart is empty"
    }else {
        document.querySelector(".cart-main").innerHTML = cartCon.map((items) => {
            let {image,title,price} = items
            total=total+price
            document.querySelector(".total-value").innerHTML="$ "+total+" .00"
            
            return(
                `<div class='cart-item'>
                    <div class='cart-item-child'>
                        <div class='row-img'>
                            <img class='rowimg' src=${image}>
                        </div>
                        <p style='font-size:15px;'>${title}</p>
                        <i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i>
                    </div>
                    <h2 style='font-size:20px;'>$ ${price}.00</h2>
                </div>`

                    
            )
        }).join('')
    }
}