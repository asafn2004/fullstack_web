var tasks = [];

const getData = () => {
  var taskName = document.getElementById("taskName").value;
  var taskDate = document.getElementById("taskDate").value;
  var taskTime = document.getElementById("taskTime").value;

  var addTask = new Object();
  addTask.name = taskName;
  addTask.date = taskDate;
  addTask.time = taskTime;
  addTask.id = Date.now();

  tasks.push(addTask);
  document.getElementById("formDiv").reset();

  makeTask();

  localStorage.setItem("tasks_list", JSON.stringify(tasks));
};

const makeTask = () => {
  var result = "";
  tasks.map((item) => {
    result += `
    <div
    class="noteDiv"
  >
    <img
    id="x"
    src="/Full_Stack_Web_John_Bryce/mesima1/img/notebg.png"
  />
  <svg onclick="removeData(); deleteNote('${item.id}')" id='y' class="signX" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg>
  <p>${item.name}</p>
  <span class="date">${item.date}</span>
  <span class="time">${item.time}</span>
  </div>
`;
  });
  document.getElementById("makeTask").innerHTML = result;
  //   console.log(result);
};

const retrieveData = () => {
  var myData = JSON.parse(localStorage.getItem("tasks_list"));
  if (myData) {
    tasks = myData;
    console.log(tasks);
    makeTask();
  }
};

retrieveData();

const removeData = (id) => {
  localStorage.removeItem("tasks_list");
  //   makeTask();
};

const deleteNote = (timeStamp) => {
  tasks = tasks.filter((item) => item.id != timeStamp);
  console.log(tasks);
  makeTask();
};

// const deleteNote = (svg) => {
//   var note = svg.parentNode.parentNode;
//   var noteIndex = Array.from(note.parentNode.children).indexOf(note);
//   tasks.splice(noteIndex, 1);
//   note.parentNode.removeChild(note);
// };

console.log(tasks);
console.log(localStorage);
