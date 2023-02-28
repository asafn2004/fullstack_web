var sales = [];
var service = [];
var lab = [];

const addNumber = () => {
  const phoneNum = document.getElementById("phone_num").value;
  const optionSelect = document.getElementById("optionSelect").value;
  console.log(optionSelect);
  switch (optionSelect) {
    case "Sales":
      sales.unshift(phoneNum);
      createWaitingSales();
      break;
    case "Service":
      service.unshift(phoneNum);
      createWaitingService();
      break;
    case "Lab":
      lab.unshift(phoneNum);
      createWaitingLab();
      break;
    default:
      alert("MAMI");
  }
  document.getElementById("phone_num").value = "";
  //   document.getElementById("optionSelect").value = "Sales";
};

const createWaitingSales = () => {
  var result = "";
  for (var index = sales.length - 1; index >= 0; index--) {
    result += `
        <tr><td><span class="myHeader">${sales[index]}</tr></td></span>`;
  }
  document.getElementById("tSales").innerHTML = result;
};

const createWaitingService = () => {
  var result = "";
  for (var index = service.length - 1; index >= 0; index--) {
    result += `
          <tr><td><span class="myHeader">${service[index]}</tr></td></span>`;
  }
  document.getElementById("tService").innerHTML = result;
};

const createWaitingLab = () => {
  var result = "";
  for (var index = lab.length - 1; index >= 0; index--) {
    result += `
          <tr><td><span class="myHeader">${lab[index]}</tr></td></span>`;
  }
  document.getElementById("tLab").innerHTML = result;
};

const nextSales = () => {
  var showSales = false;
  var nextNumberSales = sales.pop();
  document.getElementById("s_sales").innerHTML =
    nextNumberSales == undefined ? "Free" : nextNumberSales;
  createWaitingSales();
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

const nextService = () => {
  var showService = false;
  var nextNumberService = service.pop();
  document.getElementById("s_service").innerHTML =
    nextNumberService == undefined ? "Free" : nextNumberService;
  createWaitingService();
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

const nextLab = () => {
  var showLab = false;
  var nextNumberLab = lab.pop();
  document.getElementById("s_lab").innerHTML =
    nextNumberLab == undefined ? "Free" : nextNumberLab;
  createWaitingLab();
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

setInterval(() => {
  document.getElementById("userTime").innerHTML = new Date().toLocaleString();
}, 1000);
