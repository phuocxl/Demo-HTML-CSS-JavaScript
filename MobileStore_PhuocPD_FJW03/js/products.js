const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/* to login */
const btnLogin = $(".js-btn")
if(btnLogin) {
    btnLogin.addEventListener("click", () => window.location.href = "http://127.0.0.1:5500/login.html")
}

/* add product */

const form = $("#form")
const nameProduct = $("#fullname")
const unitPrice = $("#Unitprice")
const unitinstock = $("#Unitinstock")
const textcmt = $(".textcmt")
const manufacturer = $("#manufacturer")
const categoryAad = $("#category")
const imgFile = $(".input-file")

if(form) {
    form.addEventListener("submit",(e)=> {
        if(e.preventDefault()) {
            e.preventDefault()
        }
        let addProduct = 
            {
                name: nameProduct.value,
                img: imgFile.value,
                manufacturer: manufacturer.value,
                price: unitPrice.value,
                priceInStore:unitPrice.value,
                category: categoryAad.value,
                title:textcmt.value
            }
        
        sessionStorage.setItem("add",JSON.stringify(addProduct))
        if(confirm("Thêm thành công")) {
            window.location.href = "http://127.0.0.1:5500/Product.html"
        }
    })
}



