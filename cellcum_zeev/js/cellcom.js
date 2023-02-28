console.log("welcome to cellcom");

//create array for each department....
var lab = [];
var service = [];
var sales = [];

// console.log("my lab:", lab);
// lab.push("052-404-3142");
// lab.push("055-555-5555");
// console.log("my lab:", lab);
// console.log("getting last number:", lab.pop());
// console.log("my lab:", lab);

const addNumber = () => {
  const reqService = document.getElementById("reqService").value;
  const userTel = document.getElementById("userTel").value;
  console.log(reqService);
  //Sales, Service, Lab
  switch (reqService) {
    case "Sales":
      sales.unshift(userTel);
      createSales();
      break;
    case "Service":
      service.unshift(userTel);
      createService();
      break;
    case "Lab":
      lab.unshift(userTel);
      createLab();
      break;
    default:
      alert("אביתרררררררררררר");
  }
  document.getElementById("userTel").value = "";
  document.getElementById("reqService").value = "Sales";
};

const createSales = () => {
  var result = "";
  for (var index = sales.length - 1; index >= 0; index--) {
    result += `<tr><td><span class="myHeader">${sales[index]}</span></td></tr>`;
  }
  document.getElementById("tSales").innerHTML = result;
};

const createLab = () => {
  var result = "";
  for (var index = lab.length - 1; index >= 0; index--) {
    result += `<tr><td><span class="myHeader">${lab[index]}</span></td></tr>`;
  }
  document.getElementById("tLab").innerHTML = result;
};

const createService = () => {
  var result = "";
  for (var index = service.length - 1; index >= 0; index--) {
    result += `<tr><td><span class="myHeader">${service[index]}</span></td></tr>`;
  }
  document.getElementById("tService").innerHTML = result;
};

const nextSales = () => {
  //boolen show not show
  var showSales = false;
  //get last cell in the array => number || undefined
  var nextNumberSales = sales.pop();
  //pointer to html element in our document...
  document.getElementById("s_sales").innerHTML =
    //short if => condition?true:false;
    nextNumberSales == undefined ? "FREE" : nextNumberSales;
  createSales();
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("s_sales").style.visibility = "visible";
  }, 5000);

  var cellBlink = setInterval(() => {
    showSales = !showSales;
    document.getElementById("s_sales").style.visibility = showSales
      ? "visible"
      : "hidden";
  }, 500);
};

const nextLab = () => {
  var showLab = false;
  var nextNumberLab = lab.pop();
  document.getElementById("s_lab").innerHTML =
    nextNumberLab == undefined ? "FREE" : nextNumberLab;
  createLab();
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("s_lab").style.visibility = "visible";
  }, 5000);

  var cellBlink = setInterval(() => {
    showLab = !showLab;
    document.getElementById("s_lab").style.visibility = showLab
      ? "visible"
      : "hidden";
  }, 500);
};

const nextService = () => {
  var showService = false;
  var nextNumberService = service.pop();
  document.getElementById("s_service").innerHTML =
    nextNumberService == undefined ? "FREE" : nextNumberService;
  createService();
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("s_service").style.visibility = "visible";
  }, 5000);

  var cellBlink = setInterval(() => {
    showService = !showService;
    document.getElementById("s_service").style.visibility = showService
      ? "visible"
      : "hidden";
  }, 500);
};

// var myTime = new Date();
// console.log(myTime.toLocaleString());

setInterval(() => {
  document.getElementById("userTime").innerHTML = new Date().toLocaleString();
}, 1000);
