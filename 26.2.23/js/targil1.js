const products = [
  "milk",
  "bread",
  "almond milk",
  "soya milk",
  "tomato",
  "cherry tomato",
  "corn bread",
  "black bread",
];

const searchMe = () => {
  const searchItem = document.getElementById("filterList").value;
  var result = "";
  products
    .filter((item) => item.includes(searchItem))
    .map((item) => (result += item + "<br/>"));
  document.getElementById("container").innerHTML = result;
};
