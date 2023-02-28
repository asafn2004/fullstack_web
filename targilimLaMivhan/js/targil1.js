var toranot = [];

const handleData = () => {
  var zName = document.getElementById("zName").value;
  var zTel = document.getElementById("zTel").value;
  var zId = document.getElementById("zId").value;

  var newToranot = new Object();
  newToranot.name = zName;
  newToranot.tel = zTel;
  newToranot.id = zId;

  toranot.push(newToranot);
  document.getElementById("zForm").reset();
  makeTable();
};
const makeTable = () => {
  var result = "";
  for (var index = 0; index < toranot.length; index++) {
    result += `
              <tr>
                  <td>${toranot[index].name}</td>
                  <td>${toranot[index].tel}</td>
                  <td>${toranot[index].id}</td>
                  </tr>`;
  }

  document.getElementById("tavla").innerHTML = result;
  console.log(result);
};
