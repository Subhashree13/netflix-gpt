export const checkValidData = (email,password)=>{
    const isEmailvalid = /^([A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!isEmailvalid) return "email id is not valid";
    if( !isPasswordValid) return "password is not valid";
    return null;
    
}