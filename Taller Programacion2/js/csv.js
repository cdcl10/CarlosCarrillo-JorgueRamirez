
var btnadd = document.getElementById('addAnimal')

// Loading a CSV using D3
let globaldata;//let es variable


  // var microchip = document.getElementById("Microship").value;
  // var species = document.getElementById("species").value;
  // var sex = document.getElementById("sex").value;
  // var size = document.getElementById("size").value;
  // var potentDangerous = document.getElementById("potentDangerous").value;
  // var neighborhood = document.getElementById("neighborhood").value;

const from = document.getElementById('form12');

btnadd.addEventListener("click", () => {
  console.log(document.getElementById('Microchip').value)
  instertRowDataTable();
})

function instertRowDataTable(){
  let tableref = document.getElementById('tablA');
  let columref = tableref.insertRow(1);
  
  var newcellref = columref.insertCell(0);
  newcellref.textContent = document.getElementById('Microchip').value;

  newcellref = columref.insertCell(1);
  newcellref.textContent = document.getElementById('species').value;

  newcellref = columref.insertCell(2);
  newcellref.textContent = document.getElementById('sex').value;

  newcellref = columref.insertCell(3);
  newcellref.textContent = document.getElementById('size').value;

  newcellref = columref.insertCell(4);
  newcellref.textContent = document.getElementById('potentDangerous').value;

  newcellref = columref.insertCell(5);
 newcellref.textContent = document.getElementById('neighborhood').value;

  
  


}