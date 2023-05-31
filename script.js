let url = 'https://randomuser.me/api/'
console.log(url);
let title = document.getElementById('title')
let fullName = document.getElementById('fullName')
let phoneNumber = document.getElementById('phoneNumber')
let email = document.getElementById('email')
let street = document.getElementById('street')
let btn = document.getElementById('button')
let img = document.getElementById('img')

btn.addEventListener('click', getData)

function getData(){
    fetch(url)
.then((response)=>{
return response.json()

})
.then((data)=>{
    
    let result = data.results;
    let newTitle = result[0].name.title;
    title.textContent= newTitle;
    let firstName = result[0].name.first;
    let lastName = result[0].name.last;
    let newEmail = result[0].email
    let newPhoneNumber = result[0].phone
    let newStreetAddress =result[0].location.street.number + " "+ result[0].location.street.name + " " + result[0].location.city + " " + result[0].location.state
    let newImage = result[0].picture.large;
    fullName.textContent = ' ' + firstName + ' ' + lastName;
    email.textContent = newEmail
    phoneNumber.textContent = newPhoneNumber
    street.textContent = newStreetAddress
    img.src =newImage
    


})
.catch((error) => {
    console.log("Error:", error);
  });




}

