
// const btn = document.querySelector(".btn");



// function Products(name,qte,price,st){
//   this.name = name,
//   this.qte = qte,
//   this.price = price,
//   this.st = st
// }

// const product1 = new Products("ordi", 2, 500, 1000);
// // const product2 = new Products("cuillaire", 2, 500, 1000);
// // const product3 = new Products("fourchette", 2, 500, 1000);

// let products = [];
// products.push(product1);

// btn.addEventListener("click", ajouter);
// function ajouter(){
//   listsOfProducts = "";

//   products.forEach(prod => 
//     listsOfProducts += `
//     <tr class="text-center">

//       <td>
//         <div class="name__article">
//           <div>
//             <p class="description">${prod.name}</p>
//             <p class="delete__article"><i class="far fa-trash-alt"></i></p>
//           </div>
//         </div>
//       </td>

//       <td>
//         <div class="compteur">
//           <button id="btn-moins" class="sigle">-</button>
//           <span id="number">1</span>
//           <button id="btn-plus" class="sigle">+</button>
//         </div>
//       </td>

//       <td class="content__unit__price">
//         <div class="content__price">
//           <span class="unit-price"></span>
//         </div>
//       </td>

//       <td class="content__subtotal">
//         <div class="content__line">
//           <span class="subTotal"></span>
//         </div>
//       </td>
//     </tr>
//     `
//     )

//     document.getElementById("lists__product").innerHTML = listsOfProducts;  
// }



// // function createRow(entree){
// //   //entree : {nomArtivle, qte, prix}

// //   const tr = document.createElement('tr');
// //   const tdNomArticle = document.createElement('td');
// //   // tdNomArticle.classList.add('nomArticle');
// //   tdNomArticle.innerHTML = entree.nomArticle;
// //   tr.appendChild(nomArticle);

// //   console.log(tdNomArticle);


// //   const tdQte = document.createElement('td');
// //   // tdQte.classList.add('qte');
// //   tdQte.innerHTML = entree.qte;
// //   tr.appendChild(tdQte);

// //   const tdPrix = document.createElement('td');
// //   // tdPrix.classList.add('prix');
// //   tdPrix.innerHTML = entree.prix;
// //   tr.appendChild(tdPrix);

// //   const tdTotal = document.createElement('td');
// //   // tdTotal.classList.add('nomArticle');
// //   tdTotal.innerHTML = entree.soustotal;
// //   tr.appendChild(tdTotal);
  
// //   return tr;
// // }


// // function createTable(entrees){
// //   const tbody = document.querySelector(".table tbody");
// //   const totalglobal = document.querySelector(".table .global-total");
// //   const rows = entrees.map(e => ({...e, soustotal: e.prix * e.qte}));
// //   rows.forEach(entree => tbody.appendChild(createRow(entree)));
// //   const total = rows.reduce((acc, entree) => acc + entree.soustotal, 0);
// //   totalglobal.innerHTML = total;
// // }
// // createTable(includeLine);

// // const includeLine = [
// //   {
// //     "nomArticle": searchInput.value,
// //     "qte": parseInt(number),
// //     "prix": unitPrice
// //   }
// // ];

// // console.log(includeLine);


