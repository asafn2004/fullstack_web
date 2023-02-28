var userTravel = [];

const getData = () => {
  var wToGo = document.getElementById("wToGo").value;
  var nPpl = document.getElementById("nPpl").value;
  var qPpl = document.getElementById("qPpl").value;
  var dMny = document.getElementById("dMny").value;
  var bagNum = document.getElementById("bagNum").value;

  var addTravel = new Object();
  addTravel.destination = wToGo;
  addTravel.passName = nPpl;
  addTravel.passQty = qPpl;
  addTravel.destCost = dMny;
  addTravel.bagNum = bagNum;

  userTravel.push(addTravel);

  document.getElementById("inputForm").reset();
  makeTable();
};

const makeTable = () => {
  var result = "";
  var totalPrice = 0;
  userTravel.map((item) => {
    if (item.destination == "Beliz") {
      result += `
        <tr>
        <td><img width="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXA8mNjNTZPr_BcqzOIcAsxEoGeP8vDo0DZRwwJWQDgjzTh4eJdFVi-P_DIjxLdXdG-w&usqp=CAU"></td>
        <td>${item.destination}</td>
        <td>${item.passName}</td>
        <td>${item.passQty}</td>
        <td>${item.destCost}</td>
        <td>${item.bagNum}</td>
        <td><input type="checkbox">Yes/No?</td>
        </tr>`;
      if (item.bagNum == "0") {
        totalPrice += item.destCost * item.passQty;
      } else if (item.bagNum == "1 - 50$") {
        totalPrice += item.destCost * item.passQty + item.passQty * 50;
      } else if (item.bagNum == "2 - 100$") {
        totalPrice += item.destCost * item.passQty + item.passQty * 100;
      }
    } else if (item.destination == "Mexico") {
      result += `
        <tr>
        <td><img width="200" src="https://img.freepik.com/free-vector/mexico-colorful-horizontal-composition-header-title-with-national-flag-cultural-traditional-symbols-big-letter_1284-27545.jpg?w=2000"></td>
        <td>${item.destination}</td>
        <td>${item.passName}</td>
        <td>${item.passQty}</td>
        <td>${item.destCost}</td>
        <td>${item.bagNum}</td>
        <td><input type="checkbox">Yes/No?</td>
        </tr>`;
      if (item.bagNum == "0") {
        totalPrice += item.destCost * item.passQty;
      } else if (item.bagNum == "1 - 50$") {
        totalPrice += item.destCost * item.passQty + item.passQty * 50;
      } else if (item.bagNum == "2 - 100$") {
        totalPrice += item.destCost * item.passQty + item.passQty * 100;
      }
    } else if (item.destination == "Panama") {
      result += `
        <tr>
        <td><img width="200" src="https://publishnews.es/wp-content/uploads/2022/05/Panama%CC%81.jpeg"></td>
        <td>${item.destination}</td>
        <td>${item.passName}</td>
        <td>${item.passQty}</td>
        <td>${item.destCost}</td>
        <td>${item.bagNum}</td>
        <td><input type="checkbox">Yes/No?</td>
        </tr>`;
      if (item.bagNum == "0") {
        totalPrice += item.destCost * item.passQty;
      } else if (item.bagNum == "1 - 50$") {
        totalPrice += item.destCost * item.passQty + item.passQty * 50;
      } else if (item.bagNum == "2 - 100$") {
        totalPrice += item.destCost * item.passQty + item.passQty * 100;
      }
    }
    // result += `
    // <tr>

    // <td>${item.destination}</td>
    // <td>${item.passName}</td>
    // <td>${item.passQty}</td>
    // <td>${item.destCost}</td>
    // <td>${item.bagNum}</td>
    // <td><input type="checkbox">Yes/No?</td>
    // </tr>`;
    // if (item.bagNum == "0") {
    //   totalPrice += item.destCost * item.passQty;
    // } else if (item.bagNum == "1 - 50$") {
    //   totalPrice += item.destCost * item.passQty + item.passQty * 50;
    // } else if (item.bagNum == "2 - 100$") {
    //   totalPrice += item.destCost * item.passQty + item.passQty * 100;
    // }
  });
  document.getElementById("addToTable").innerHTML = result;
  document.getElementById(
    "total"
  ).innerHTML = `Total Price For All Passengers: ${totalPrice}$`;
  console.log(userTravel);
};
