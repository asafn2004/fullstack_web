var streets = [];

const urlStreets =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=10000";
var myDataStreet = fetch(urlStreets)
  .then((response) => response.json())
  .then((data) => {
    streets = data.result.records;
    console.log("me ready street");
  });

const citySrch = () => {
  const searchItem = document.getElementById("citySearch").value;
  var result = "";
  streets
    .filter((item) => item["שם_ישוב"].includes(searchItem))
    .map((item) => (result += `<option>${item["שם_רחוב"]}</option>`));
  document.getElementById("streetSearch").innerHTML = result;
};

String.prototype.stars = function () {
  var result = "";
  for (var index = 0; index < this.length + 4; index++) {
    result += "*";
  }
  result = `${result}\n* ${this} *\n${result}`;

  return result;
};

const user = "Asaf";
console.log(user.stars());
console.log(user.length);
