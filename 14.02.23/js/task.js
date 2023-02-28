var tasks = [];

const handleData = () => {
  //connect our javascript to html, so each variable will point to an html element
  var tName = document.getElementById("tInput").value;
  //   var pQty = document.getElementById("pQty").value;
  //   var pPrice = document.getElementById("pPrice").value;
  //   var pURL = document.getElementById("pURL").value;

  //create an object which will have all our data according to names...
  var newTask = new Object();
  newTask.name = tName;
  //   newProduct.qty = pQty;
  //   newProduct.price = +pPrice;
  //   newProduct.url = pURL;
  /*
    json - Java Script Object Notation
    {
        name: "milk",
        qty : 5,
        price: 7,
        url: https://www.tara.co.il/wp-content/uploads/2018/01/7290000474076.png
    }
  */

  //add our new shiny product to our collection of products...
  tasks.push(newTask);

  //clear all data for getting next product
  document.getElementById("taskForm").reset();

  //create a table from our prodcuts collection
  makeTable();

  //save to user hard disk..
  localStorage.setItem("tasks_list", JSON.stringify(tasks));
};

const makeTable = () => {
  //our result for injection
  var result = "";
  //calculate total price of all products
  //   var totalPrice = 0;
  //iterate on products
  //   for (var index = 0; index < products.length; index++) {
  //     result += `
  //             <tr>
  //                 <td><input type="checkbox"/></td>
  //                 <td><img src="${products[index].url}" width="100"/></td>
  //                 <td>${products[index].name}</td>
  //                 <td>${products[index].qty}</td>
  //                 <td>${products[index].price}</td>
  //                 <td>${products[index].qty * products[index].price}</td>
  //             </tr>
  //         `;
  //     totalPrice += products[index].qty * products[index].price;
  //   }

  //console.log(result);

  tasks.map((item) => {
    result += `
            <tr>
                <td><input type="checkbox">  ${item.name}</td>
            </tr>
        `;
  });

  document.getElementById("tasksList").innerHTML = result;
};

const retriveData = () => {
  var myData = JSON.parse(localStorage.getItem("tasks_list"));
  if (myData) {
    tasks = myData;
    console.log(tasks);
    makeTable();
  }
};

retrieveData();
