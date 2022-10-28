
const loginDB = [
    {
        user:'admin',
        pass: '123456'
    },
    {
        user:'pdp',
        pass: '123456'
    }
]

const inputUser = document.querySelector("#user")
const inputPass = document.querySelector("#password")
const formLogin = document.querySelector("#form-login")

formLogin.addEventListener("submit",onFormSubmit)

function onFormSubmit(e) {
    if(e.preventDefault) {
        e.preventDefault()
    }
    const userName = inputUser.value
    const passWord = inputPass.value
    const userdbs = loginDB.some((userdb) => {
        return userdb.user === userName
    })

    const passdbs = loginDB.some((passdb) => {
        return passdb.pass === passWord
    })

    if(userdbs == true && passdbs ==true) {
        window.location.href = "http://127.0.0.1:5500/products.html"
    }else {
        alert("User hoặc Password không đúng")
    }
    return false
    
}
