let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let addContactBtn = document.getElementById("addContactBtn");
let cardsContainer = document.getElementById("cardsContainer");
let contacts = [];
addContactBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  addDetails();
  showContact();
});

function addDetails(){
  let contactDetail = {
    name:nameInput.value,
    phone:phoneInput.value,
    email:emailInput.value,
  }
  contacts.push(contactDetail);
}

function showContact(){
  cardsContainer.innerHTML = "";
  contacts.forEach((contact, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let sno = document.createElement("p");
    let name = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    sno.textContent = index+1;
    name.textContent = contact.name;
    phone.textContent = contact.phone;
    email.textContent = contact.email;
    card.appendChild(sno);
    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(email);
    cardsContainer.appendChild(card);
  });
}