var yelenaList = [];

const getData = () => {
  var yImg = document.getElementById("yImg").value;
  var yName = document.getElementById("yName").value;
  var yQty = document.getElementById("yQty").value;
  var yPrice = document.getElementById("yPrice").value;

  var addProduct = new Object();
  addProduct.img = yImg;
  addProduct.name = yName;
  addProduct.qty = yQty;
  addProduct.price = yPrice;

  yelenaList.push(addProduct);

  document.getElementById("yForm").reset();
  makeTable();
};

// const makeTable = () => {
//   var result = "";
//   var totalResult = 0;
//   for (index = 0; index < yelenaList.length; index++) {
//     result += `
//         <tr>
//         <td><input type="checkbox"></td>
//         <td><img width="200" src="${yelenaList[index].img}"></td>
//         <td>${yelenaList[index].name}</td>
//         <td>${yelenaList[index].qty}</td>
//         <td>${yelenaList[index].price}</td>;
//         <td>${yelenaList[index].price * yelenaList[index].qty}</td>
//         </tr>`;
//     totalResult += yelenaList[index].price * yelenaList[index].qty;
//   }

//   document.getElementById("tBody").innerHTML = result;
//   document.getElementById("total").innerHTML = `Total price is: ${totalResult}`;
// };

// const makeTable = () => {
//   var result = "";
//   var totalPrice = 0;

// products.map((item) => {
//   result += `
//           <tr>
//               <td><input type="checkbox"/></td>
//               <td><img src="${item.url}" width="100"/></td>
//               <td>${item.name}</td>
//               <td>${item.qty}</td>
//               <td>${item.price}</td>
//               <td>${item.qty * item.price}</td>
//           </tr>
//       `;
//   totalPrice += item.qty * item.price;
// });
// document.getElementById("productList").innerHTML = result;
// document.getElementById("totalPrice").innerHTML = totalPrice;
// };
