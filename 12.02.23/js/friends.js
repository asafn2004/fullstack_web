var friendList = [];

const getData = () => {
  var fName = document.getElementById("fName").value;
  var fTel = document.getElementById("fTel").value;
  var fPhoto = document.getElementById("fImg").value;

  console.log(fName, fTel, fPhoto);

  var newFriend = new Object();
  newFriend.name = fName;
  newFriend.tel = fTel;
  newFriend.photo = fPhoto;

  friendList.push(newFriend);

  console.log(friendList);
  document.getElementById("friendForm").reset();
  addToTable();
};
const addToTable = () => {
  var result = "";
  for (index = 0; index < friendList.length; index++) {
    result += `
        <tr>
        <td><input type="checkbox"></td>
        <td>${friendList[index].name}</td>
        <td>${friendList[index].tel}</td>
        <td><img width="200" src="${friendList[index].photo}"></td>
        
        `;
  }
  console.log(result);
  document.getElementById("friendTable").innerHTML = result;
};
