//validate email
export const isValidEmail = (stringEmail: string) =>{
    // (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
  {
    return (true)
  }
    return (false)
}

export const isValidPassword = (stringPassword: string) => {
    if(stringPassword.length >= 3) {
        return true
    } return false
}
