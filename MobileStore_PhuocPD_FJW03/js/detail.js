
function btnBack() {
    const btnBack = document.querySelector(".js-btn-success")
    if(btnBack) {
        btnBack.addEventListener("click",() => window.location.href = "http://127.0.0.1:5500/Product.html")
    }
}

/* load deteal */

function loadDetail() {
    const detailMain = document.querySelector(".container-main ")
    const product = JSON.parse(localStorage.getItem("detail"))
    if(detailMain) {
        const productInnerHTML= `
            <div class="container-main-img cl2">
                <img src="${product.img}" alt="" class="container-main-img-detail">
            </div>
            <div class="container-main-detail cl2">
                <h5 class="container-main-name">${product.name}</h5>
                <p class="container-main-desc">${product.title}</p>
                <p class="container-main-code">Item code: <span class="span-code">${product.ItemCode}</span></p>
                <p class="container-main-manufacturer">manufacturer: <span class="span-manufacturer">${product.manufacturer}</span></p>
                <p class="container-main-category">category: <span class="span-category">${product.category}</span></p>
                <p class="container-main-avalibale">Avalibale units in store: <span class="span-store">${product.price}</span></p>
                <h5 class="container-main-price">${product.priceInStore}<span>USD</span></h5>
                <div class="container-main-detail-btn">
                    <button type="button" class="btn btn-success js-btn-success ti-arrow-circle-left"> Back</button>
                    <button type="button" class="btn btn-warning js-btn-addCart ti-shopping-cart"> Order Now</button>
                </div>
            </div>
        `
        detailMain.innerHTML = productInnerHTML
    }
    btnBack()
} loadDetail()

/* add product to cart */

function addProductCart() {
    let newDetailCart = JSON.parse(localStorage.getItem("cart"))
    const productDetail = JSON.parse(localStorage.getItem("detail"))
    console.log(productDetail)
    const btnAdd = document.querySelector(".js-btn-addCart")
    if(btnAdd) {
        btnAdd.addEventListener("click",() => {
            if(!newDetailCart) {
                newDetailCart = productDetail
                localStorage.setItem("cart",JSON.stringify(addProducts))
                alert("Thêm sản phẩm thành công")
            } else {
                newDetailCart.push(productDetail)
                localStorage.setItem("cart",JSON.stringify(newDetailCart))
                alert("Thêm sản phẩm thành công")
            }
        })
    }
}addProductCart()

