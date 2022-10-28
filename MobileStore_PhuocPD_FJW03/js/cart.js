const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function gotoProduct() {
    const toProduct = document.querySelector(".btn-coundtinue")
    if(toProduct) {
        toProduct.addEventListener("click", () => window.location.href = "http://127.0.0.1:5500/Product.html")
    }
}gotoProduct()

/* load product to cart */
const newAddProducts = JSON.parse(localStorage.getItem("cart"))
function loadProducts() {
    if(newAddProducts) {
        const addProductCart = newAddProducts.map(function(product, index) {
            return `
            <ul class="container-main-content-list product-list-cart">
            <li class="container-main-content-item">${product.name}</li>
            <li class="container-main-content-item">
                <input type="number" value="1" min="1" style="width: 30px; outline:none; border: none">
            </li>
            <li class="container-main-content-item">${product.price}</li>
            <li class="container-main-content-item price-store">${product.priceInStore}</li>
            <li class="container-main-content-item">
                <button type="button" class="btn btn-danger btn-remove ti-close" onclick="deleteCartItem(${index})"> remove</button>
            </li>
        </ul>
        `
        })
        const cartList = $(".list-item")
        if(cartList) {
            cartList.innerHTML = addProductCart.join("")
        }
    }
}loadProducts()

/* sum price */

function handelSumPrice() {
    const itemCarts = $$(".product-list-cart")
    
        let sumPrice = 0
        for(let i = 0; i < itemCarts.length; i++) {
            const inputCount = itemCarts[i].querySelector("input").value
            const inputPrice = itemCarts[i].querySelector(".price-store").innerText
            sum = inputCount * inputPrice
            sumPrice += sum
        }   
        const priceTotle = $(".price-total")
        priceTotle.innerText = sumPrice
}handelSumPrice()

function onchangePrice() {
    const itemCarts = $$(".product-list-cart")
        for(let i = 0; i<itemCarts.length; i++) {
            const input = itemCarts[i].querySelector("input")
            input.addEventListener("change",() => handelSumPrice())
        }
}onchangePrice()

/* clear cart */
function clearCart() {
    const btnClearCart = $(".js-btn-cart-clear")
    if(btnClearCart) {
            btnClearCart.addEventListener("click", function() {
                if(confirm("Bạn có muốn xóa hết tất cả sẩn phẩm trong giỏ hàng")) {
                    localStorage.removeItem("cart")
                    location.reload();
                }
            })
        
    }
}clearCart()


/* remove cart item */

function deleteCartItem(id) {
        if(confirm("Bạn có muốn xóa không")) {
            newAddProducts.splice(id,1)
            localStorage.setItem("cart",JSON.stringify(newAddProducts))
            loadProducts()
            onchangePrice()
            handelSumPrice()
        }
}

