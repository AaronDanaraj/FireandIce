const baseURL = "https://anapioficeandfire.com/api";

const getAllRecords = () => {
    fetch(`${baseURL}/books`, {method: "GET"})

    .then((data) => data.json())
    .then((data) => {
        console.log(data);
        populateGridData(data);
})
    .catch((er) => errorHandler(er));
};

const populateGridData = (data) => {
  let tbody = document.getElementById("tbody");
  let result ="";
  for(let i=0;i<data.length;i++) {
    result += `<tr>
    <th scope="row">${i+1}</th>
    <td>${data[i].name}</td>
    <td>${data[i].isbn}</td>
    <td>${data[i].numberOfPages}</td>
    <td>${data[i].authors}</td>
    <td>${data[i].publisher}</td>
    <td>${data[i].released}</td>
    <td>${data[i].characters[0] + " " +
          data[i].characters[1] + " " +
          data[i].characters[2] + " " +
          data[i].characters[3] + " " +
          data[i].characters[4]}</td>
  </tr>`
  }
  tbody.innerHTML = result;
};

const obtainname = (str) => {
    fetch(`${str}`, {method: "GET"})
    .then((data) => data.json())
    .then((data) => {
        console.log(data.name);
        let temp = (data.name);
    })
    .catch((er) => errorHandler(er));
};

const errorHandler = (er) => console.error(er);


getAllRecords();




