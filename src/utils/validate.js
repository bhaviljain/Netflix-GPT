
export const Checkvalidate = (email , password ,name) => {
   
  
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
      );
      const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 

        const isNameValid = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)


    if(!isPasswordValid) return "Please enter a valid password" 
    if(!isEmailValid) return "Enter valid email"
    if(!isNameValid) return "Please enter First and Last Name" 
  
    return null;

}


