login=()=>{
    let username=uname.value
    let password=pswd.value

    if(!username || !password){
        alert("invalid credentials!!! Login Failed")
    }
    else{
        localStorage.setItem("username",username)
        // localStorage.setItem("password",password)
        console.log(`username:${username},password:${password}`)
        window.location=("dashboard.html")
    }


}