var lab = [];
var nurse = [];
var doctorz = [];

const addButtonNow = () => {
  var inputTur = document.getElementById("inputTur").value;
  var selectRoom = document.getElementById("selectRoom").value;
  switch (selectRoom) {
    case "מעבדה":
      lab.unshift(inputTur);
      waitMaabada();
      break;
    case "חדר אחיות":
      nurse.unshift(inputTur);
      waitNurse();
      break;
    case "רופא משפחה":
      doctorz.unshift(inputTur);
      waitDoctor();
      break;
    default:
      alert("Clalit ze Ah Yakar");
  }
  document.getElementById("inputTur").value = "";
  //   console.log(lab, nurse, doctorz);
};

const waitMaabada = () => {
  var result = "";
  for (var index = lab.length - 1; index >= 0; index--) {
    result += `
        <tr><td><span class="myHeader">${lab[index]}</span></td></tr>`;
  }
  document.getElementById("t_maabada").innerHTML = result;
};

const waitNurse = () => {
  var result = "";
  for (var index = nurse.length - 1; index >= 0; index--) {
    result += `
          <tr><td><span class="myHeader">${nurse[index]}</span></td></tr>`;
  }
  document.getElementById("t_nurse").innerHTML = result;
};

const waitDoctor = () => {
  var result = "";
  for (var index = doctorz.length - 1; index >= 0; index--) {
    result += `
          <tr><td><span class="myHeader">${doctorz[index]}</span></td></tr>`;
  }
  document.getElementById("t_doctor").innerHTML = result;
};

const nextButtonMaabada = () => {
  var nextElement = lab.pop();
  var showMaabada = false;
  document.getElementById("freeSpotMaabada").innerHTML =
    nextElement == undefined ? "FREE" : nextElement;
  waitMaabada();
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("freeSpotMaabada").style.visibility = "visible";
  }, 6000);

  var cellBlink = setInterval(() => {
    showMaabada = !showMaabada;
    document.getElementById("freeSpotMaabada").style.visibility = showMaabada
      ? "visible"
      : "hidden";
  }, 500);
};

const nextButtonNurse = () => {
  var showNurse = false;
  var nextElement = nurse.pop();
  document.getElementById("freeSpotNurse").innerHTML =
    nextElement == undefined ? "FREE" : nextElement;
  waitNurse();
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("freeSpotNurse").style.visibility = "visible";
  }, 6000);

  var cellBlink = setInterval(() => {
    showNurse = !showNurse;
    document.getElementById("freeSpotNurse").style.visibility = showNurse
      ? "visible"
      : "hidden";
  }, 500);
};

const nextButtonDoctor = () => {
  var showDoctor = false;
  var nextElement = doctorz.pop();
  document.getElementById("freeSpotDoctor").innerHTML =
    nextElement == undefined ? "FREE" : nextElement;
  waitDoctor();
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("freeSpotDoctor").style.visibility = "visible";
  }, 6000);

  var cellBlink = setInterval(() => {
    showDoctor = !showDoctor;
    document.getElementById("freeSpotDoctor").style.visibility = showDoctor
      ? "visible"
      : "hidden";
  }, 500);
};
