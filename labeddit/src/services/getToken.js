const getToken = () => {
    const token = localStorage.getItem("token")
    const auth = { 
        headers: { 
            Authorization: token
         } 
    }
    return auth    
}

export default getToken