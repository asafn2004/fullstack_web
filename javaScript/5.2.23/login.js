function sendToTable() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var res = document.getElementById("res");
    var tName = document.getElementById("tName");
    var tAge = document.getElementById("tAge");
    var tAddress = document.getElementById("tAddress");

    res.innerHTML = "<h1> You Send It, WoW! </h1>"
    tName.innerHTML = name;
    tAge.innerHTML = age;
    tAddress.innerHTML = address;


}