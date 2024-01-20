

const firstname = document.getElementById("firstname")
const lastname= document.getElementById("lastname")
const email = document.getElementById("email")
const contact = document.getElementById("contact")
const pincode = document.getElementById("pincode")
const address = document.getElementById("address")
const registrationForm = document.getElementById("registrationForm")

const error = document.getElementById("error")

const add = document.getElementById("add")

const firstnameRegex = /^[a-zA-Z]{2,20}$/
const lastnameRegex = /^[a-zA-Z]{2,20}$/
const contactRegex = /^[0-9]{10}$/
const emailRegex = /^([a-zA-Z0-9\.\_]{2,50})([@]{1})([a-z0-9]{2,40})([.]{1})([a-z]{2,10})$/
const pincodeRegex = /^[0-9]{6}$/
const addressRegex = /^[a-zA-Z]{2,20}$/


registrationForm.addEventListener("submit",function(e){

    e.preventDefault();
    
    let fname = firstname.value;
    let lname = lastname.value;
    let Email = email.value;
    let cont = contact.value;
    let pcode= pincode.value;
    let add = address.value;

    if(firstnameRegex.test(fname)==true){
        localStorage.setItem("First Name",fname)
        if(lastnameRegex.test(lname)==true){
            localStorage.setItem("Last Name",lname)
            if(emailRegex.test(Email)==true){
                localStorage.setItem("Email", Email)
                if(contactRegex.test(cont)==true){
                    localStorage.setItem("Contact",cont)
                    if(pincodeRegex.test(pcode)==true){
                        localStorage.setItem("Pin Code",pcode)
                        if(addressRegex.test(add)==true){
                            localStorage.setItem("Address",add) 

                            registrationForm.submit()
                        }
                        else{
                            error.innerText="Address is Invalid"
                        }                        
                    }
                    else{
                        error.innerText="Pincode is Invalid"
                    }                   
                }
                else{
                    error.innerText = "Contact is Invalid"
                }               
            }
            else{
                error.innerText= "Email is Invalid"
            }           
        }
        else{
            error.innerText= "Last Name is Invalid"
        }
    }
    else{
        error.innerText= "First Name is Invalid"
    }
})
