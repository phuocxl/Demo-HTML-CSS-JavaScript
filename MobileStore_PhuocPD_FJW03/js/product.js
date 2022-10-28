
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


 const products = ([
    {
        id: 1,
        name: "iPhone 14 Pro Max 128GB",
        img: "./img/iphone-14-pro.png",
        title:"iPhone 14 Pro là siêu phẩm được đông đảo các iFan cũng như các tín đồ công nghệ vô cùng chờ đón. Sở hữu thiết kế mới lạ cùng với đó là hiệu năng siêu đỉnh bậc nhất hiện nay, chắc chắn đây sẽ là cái tên sẽ làm khuấy đảo thị trường. Và chắc chắn đây cũng là mong muốn sở hữu của rất nhiều người dùng.",
        price:1000,
        priceInStore:890,
        ItemCode: 1526440382825,
        manufacturer:' Apple',
        category: 'Apple'
    },
    {
        id: 2,
        name: "Samsung Galaxy S22 Ultra 5G 128GB",
        img: "./img/ss.jpg",
        title:"Samsung Galaxy S22 Ultra 5G là siêu phẩm kế thừa tinh hoa Galaxy Note cùng đột phá Galaxy S, tạo nên sức mạnh vô song đỉnh cao.",
        price:900,
        priceInStore:689,
        ItemCode: 1526440382226,
        manufacturer: 'Samsung',
        category: 'Samsung'
    },
    {
        id: 3,
        name: "Điện thoại OPPO A55",
        img: "./img/oppo.jpg",
        title:"OPPO cho ra mắt OPPO A55 4G chiếc smartphone giá rẻ tầm trung có thiết kế đẹp mắt, cấu hình khá ổn, cụm camera chất lượng và dung lượng pin ấn tượng, mang đến một lựa chọn trải nghiệm thú vị vừa túi tiền cho người tiêu dùng.",
        price:500,
        priceInStore:450,
        ItemCode: 1526440382213,
        manufacturer: 'Oppo',
        category: 'Oppo'
    },
    {
        id: 4,
        name: "Điện thoại Huawei Nova 7",
        img: "./img/hw.jpg",
        title:"Với sự thành công của những flagship hàng đầu như P40/P40 Pro, Huawei tiếp tục tung ra dòng sản phẩm Huawei Nova 7. Sản phẩm tiếp tục ghi điểm nhờ một thiết kế cá tính, cấu hình mạnh mẽ, cụm 4 camera 64 MP và một mức giá “rất được lòng” người dùng.",
        price:500,
        priceInStore:490,
        ItemCode: 1526440382479,
        manufacturer: 'Huawei',
        category: 'Huawei'
    },
])

const addProduct = JSON.parse(sessionStorage.getItem("add"))
if(addProduct) {
    products.push(addProduct)
}

/* load products */
const newproducts = products.map(handelProduct)

function handelProduct(product) {
    return `
        <div class="product-item">
        <div class="product-item-top">
            <div class="product-top-name">
                <h2 class="product-item-name">
                    ${product.name}
                </h2>
            </div>
            <img src="${product.img}" alt="" class="product-item-img">
        </div>
        <p class="product-item-title">
            ${product.title}
        </p>
        
        <div class="product-item-bottom">
            <div class="div-price">
                <p class="product-item-price"><span class="span-price">${product.price}</span> <span>USD</span></p>
                <p class="product-item-price-store"><span class="span-price-store">${product.priceInStore}</span> <span>Unit in store</span></p>
            </div>
            <div class="div-button">
                <button type="button" class="btn btn-primary js-btn-detail ti-info-alt"> Details</button>
                <button type="button" class="btn btn-warning product-item-button js-btn-add ti-shopping-cart">
                Order Now
                </button>
            </div>
        </div>
        </div>`
}

 

function product() {
    const productMain = $(".product-list")
    if(productMain) {
        productMain.innerHTML = newproducts.join("")
    }
}product()

/* to detail */

function toDetail() {
    const toDetail = $$(".js-btn-detail")
    if(toDetail) {
        for(let i = 0; i < toDetail.length; i++) {
            toDetail[i].addEventListener("click", function(e) {
                const listItem = e.target
                const listMain = listItem.parentElement.parentElement.parentElement
                const nameItem = listMain.querySelector(".product-item-name").innerText
                const newProduct = products.find((product) => {
                    return product.name === nameItem
                })
                localStorage.setItem("detail",JSON.stringify(newProduct))
                window.location.href = "http://127.0.0.1:5500/detailProduct.html"
            })
            
        }
    }
}toDetail()


/* to cart */
function tocarrt() {
    const toCart = $(".btn-to-cart")
    if(toCart) {
        toCart.addEventListener("click", function(e) {
            window.location.href = "http://127.0.0.1:5500/cart.html"
        })
    }
}tocarrt()



/* add product to cart */

const btns = $$(".js-btn-add")
const addProducts =[]
if(btns) {
    btns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            
            const btnItem = e.target
            const productList = btnItem.parentElement.parentElement.parentElement
            const name = productList.querySelector(".product-item-name").innerText
            const price = productList.querySelector(".span-price").innerText
            const priceUnit = productList.querySelector(".span-price-store").innerText
            const addProduct = (
                {
                    name: name,
                    price: price,
                    priceInStore: priceUnit
                }
            )
            addProducts.push(addProduct)
            localStorage.setItem("cart",JSON.stringify(addProducts))
            alert("Thêm sản phẩm thành công")
        })
        
    });
}


    
    


