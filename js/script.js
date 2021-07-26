const totalSpan = document.querySelector(".global-total");
const myForm = document.querySelector("#myForm");
let productsLists = document.querySelector("#lists-product");

// creation de la premiere colonne et assignation des enfants 
function createElement(){
const tableLine = document.createElement("tr");
tableLine.classList.add("text-center");
productsLists.appendChild(tableLine);
const col1 = document.createElement("td");
tableLine.appendChild(col1);
const nameArticle = document.createElement("div");
nameArticle.classList.add("name__article");
col1.appendChild(nameArticle);
const contentPicture = document.createElement("div");
nameArticle.appendChild(contentPicture);
const picture = document.createElement("img");
contentPicture.appendChild(picture);
picture.setAttribute("src", "../ressource/images/Code-logo .PNG");
const delDes = document.createElement("div");
delDes.classList.add("del-des");
nameArticle.appendChild(delDes);
const p1 = document.createElement("p");
p1.classList.add("description");

const searchInput = document.querySelector("#name");

p1.innerHTML = searchInput.value;
delDes.appendChild(p1);
const p2 = document.createElement("p");
p2.classList.add("delete__article");
p2.textContent = "Supprimer";
delDes.appendChild(p2);

// creation de la deuxieme colonne et assignation des enfants 
const col2 = document.createElement("td");
tableLine.appendChild(col2);
let cpt = document.createElement("div");
cpt.classList.add("compteur");
col2.appendChild(cpt);
let btnMoins = document.createElement("button");
btnMoins.setAttribute("class", "btn-moins");
btnMoins.textContent = "-";
cpt.appendChild(btnMoins);
const number = document.createElement("span");
number.setAttribute("class", "number");
number.innerHTML = "1";
cpt.appendChild(number);
let compteur = parseInt(number.innerHTML);
const btnPlus = document.createElement("button");
btnPlus.classList.add("sigle");
btnPlus.setAttribute("class", "btn-plus");
btnPlus.textContent = "+";
cpt.appendChild(btnPlus);

// creation de la troisieme colonne et assignation des enfants 
const col3 = document.createElement("td");
tableLine.appendChild(col3);
col3.classList.add("content__unit__price");
const contentPrice = document.createElement("div");
contentPrice.classList.add("content__price");
col3.appendChild(contentPrice);
const unitPrice = document.createElement("span");
unitPrice.classList.add("unit-price");
const amount = document.querySelector("#amount-input");
unitPrice.innerHTML = amount.value;
contentPrice.appendChild(unitPrice);

// creation de la quatrieme colonne et assignation des enfants 
const col4 = document.createElement("td");
col4.classList.add("content__subtotal");
tableLine.appendChild(col4);
const contentLine = document.createElement("div");
contentLine.classList.add("content__line");
col4.appendChild(contentLine);
const subTotal = document.createElement("span");
subTotal.innerHTML = amount.value;
subTotal.setAttribute("class", "subTotal");
contentLine.appendChild(subTotal);

// La fonction augmenter la quantité.
document.querySelectorAll(".btn-plus").forEach(btn => btn.addEventListener("click", augmenterQte));
document.querySelectorAll(".btn-moins").forEach(btn => btn.addEventListener("click", diminuerQte));
document.querySelectorAll(".delete__article").forEach(elt => elt.addEventListener("click", removeArticle));

}

// La fonction ajouter une ligne
myForm.addEventListener("submit", ajouter);
function ajouter(e){
e.preventDefault();
createElement();
total();
 
} 

function augmenterQte(){
  let qty =this.previousElementSibling
  qty.innerText= parseInt(this.previousElementSibling.innerText)+1;
  let price = parseInt(this.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent);
  this.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].children[0].innerHTML = price * parseFloat(qty.textContent);
  total();
}

// // La fonction diminuer la quantité
function diminuerQte(){
  if(parseInt(this.nextElementSibling.innerText) > 0){
    let qty =this.nextElementSibling
    qty.innerText= parseInt(this.nextElementSibling.innerText)-1;
    let price = parseInt(this.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent);
    this.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].children[0].innerHTML = price * parseInt(qty.textContent);
  }
  total();
}

function total(){
  //creation du tab de save
 
  let tab = [];
  const subTotal = document.querySelectorAll(".subTotal");
  
  if(subTotal.length == 0){
      let totalSpan = document.querySelector('.global-total');
      totalSpan.innerHTML = 0 + " Fcfa";
      return 0;
  }
  subTotal.forEach(element=> tab.push(parseInt(element.innerHTML)));
  const prixTotal = tab.reduce((acc, curr) => acc + curr);
  let totalSpan = document.querySelector('.global-total');
  totalSpan.innerHTML = prixTotal + "Fcfa";
}

function removeArticle() {
 this.parentElement.parentElement.parentElement.parentElement.remove();
	total();
}

