const isAuthenticated= () =>{
    const data = JSON.parse(localStorage.getItem("user"))
    
    if(data && data.token){
        console.log(data,data.token)
        return true
    } 
    else return false
}

const LogOut = () => {
    localStorage.clear();
}

export { isAuthenticated, LogOut}