var rows=[];
var counterId=0;

var parseLateSwitch = value => {
  if (value) {
    return "Tarde :(";
  }
  return "A tiempo :)";
};
function addRow(carnet, schedule, late, tBody) {
  var newRow = document.createElement("tr");
  var date = new Date();

  rows.push({
    id: 0,
    carnet: carnet,
    schedule: schedule,
    late: late,
  })

  newRow.innerHTML = `
    <td><b>${carnet}</b></td>
    <td>${schedule}</td>
    <td>${date.toLocaleDateString()}</td>
    <td>${late}</td>`;

  var cellContainer= document.createElement("td");
  var deleteButton = document.createElement("button");
  var confirmationinput= document.createElement("form-control");

  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  confirmationinput.classList.add("form-control");

  confirmationinput.type="text";

  deleteButton.innerText="Eliminar";
  deleteButton.value=counterId;

  deleteButton.addEventListener("click",event=>{
    var idElement=event.srcElement.value;
    var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;
    tBody.removeChild(trToDelete);

    rows.forEach((items,index)=>{
      if(item.id==idElement){
        rows.splice(index,1);
      }
    });
  });

  confirmationinput.addEventListener("keyup", event => {
    var carnet2 = confirmationinput.value;
    if (carnet2==carnet) {
      deleteButton.disabled = false;
    } else {
      deleteButton.disabled = true;
    }
  });



  cellContainer.appendChild(deleteButton);
  cellContainer.appendChild(confirmationinput);
  newRow.appendChild(cellContainer);
  //tBody.appendChild(newRow);

  tBody.appendChild(newRow);
  counterId++;
}

window.onload = function() {
  var submit_btn = document.querySelector("#submit_btn");
  var carnet_field = document.querySelector("#carnet_field");
  var schedule_field = document.querySelector("#schedule_field");
  var late_switch = document.querySelector("#late_switch");
  var tBody = document.querySelector("#table_body");

  var carnetRegex = new RegExp("[0-9]{8}");

  submit_btn.addEventListener("click", () => {
    var carnet = carnet_field.value;
    var schedule = schedule_field.options[schedule_field.selectedIndex].text;
    var late = parseLateSwitch(late_switch.checked);
    if (carnetRegex.test(carnet)) {
      addRow(carnet, schedule, late, tBody);
    } else {
      alert("Formato no valido");
    }
  });

  carnet_field.addEventListener("keyup", event => {
    var carnet = carnet_field.value;
    if (carnetRegex.test(carnet)) {
      submit_btn.disabled = false;
    } else {
      submit_btn.disabled = true;
    }
  });
  //console.log("hola");
};
