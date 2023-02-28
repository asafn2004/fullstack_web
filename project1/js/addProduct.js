var products = [];

const getData = () => {
  var productName = document.getElementById("productName").value;
  var productPrice = document.getElementById("productPrice").value;
  var productOptions = document.getElementById("productOptions").value;
  var productImg = document.getElementById("productImg").value;

  var addProducts = new Object();
  addProducts.name = productName;
  addProducts.price = productPrice;
  addProducts.option = productOptions;
  addProducts.imgUrl = productImg;

  products.push(addProducts);
  document.getElementById("formAdd").reset();
  makeTable();
};

const makeTable = () => {
  var result = "";
  products.map((item) => {
    result += `
    <tr>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.option}</td>
    <td><img src="${item.imgUrl}" width="200"/></td>
    <td><input type="checkbox" id="checkDlt" onclick="deleteRow()"></td>
    </tr>`;
  });
  document.getElementById("productTable").innerHTML = result;
  console.log(products);
};

const deleteRow = () => {
  for (var index = 0; index < products.length; index++) {
    products.splice(index, index);
  }
  makeTable();
};
