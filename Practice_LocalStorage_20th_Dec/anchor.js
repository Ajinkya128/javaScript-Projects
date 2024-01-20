const displayFirstName =  document.getElementById('displayFirstName');
const displayLastName =  document.getElementById('displayLastName')
const displayEmail =  document.getElementById('displayEmail')
const displayContactNumber =  document.getElementById('displayContactNumber')  
const displayPincode =  document.getElementById('displayPincode')
const displayAddress =  document.getElementById('displayAddress')

let fName = localStorage.getItem('First Name');
let lName = localStorage.getItem('Last Name');
let eName = localStorage.getItem('Email');
let cNumber = localStorage.getItem('Contact');
let pin = localStorage.getItem('Pin Code');
let add = localStorage.getItem('Address');


displayFirstName.innerText = fName;
displayLastName.innerText = lName;
displayEmail.innerText = eName;
displayContactNumber.innerText = cNumber;
displayPincode.innerText = pin;
displayAddress.innerText = add;
