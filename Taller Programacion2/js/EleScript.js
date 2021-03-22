$(document).ready(function() {
    $('#load_data').click(function() {
        $.ajax({
            url: "Csv/pets-citizens.csv",
            dataType: "text",
            success: function(data) {
                var employee_data = data.split(/\r?\n|\r/);
                var table_data = '<table class="table table-bordered table-striped" id="tablA">';
                for (var count = 0; count < employee_data.length; count++) {
                    var cell_data = employee_data[count].split(";");
                    table_data += '<tr>';
                    for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                        if (count === 0) {
                            table_data += '<th>' + cell_data[cell_count] + '</th>';
                        } else {
                            table_data += '<td>' + cell_data[cell_count] + '</td>';
                        }
                    }
                    table_data += '</tr>';
                }
                table_data += '</table>';
                $('#employee_table').html(table_data);
            }
        });
    });

});

const btnAnimal = document.querySelector('#animal');
const tablaAnimal = document.querySelector("#employee_table");
const th = document.createElement("td");
const th1 = document.createElement("td");
const th2 = document.createElement("td");
const th3 = document.createElement("td");
const th4 = document.createElement("td");
const th5 = document.createElement("td");
const tr = document.createElement("tr");


btnAnimal.addEventListener('click', function() {

    th.appendChild(document.querySelector('#Microchip').value);
    tr.appendChild(th);
    th1.appendChild(document.querySelector('#species').value);
    tr.appendChild(th1);
    th2.appendChild(document.querySelector('#sex').value);
    tr.appendChild(th2);
    th3.appendChild(document.querySelector('#size').value);
    tr.appendChild(th3);
    th3.appendChild(document.querySelector('#potentDangerous').value);
    tr.appendChild(th4);
    th4.appendChild(document.querySelector('#neighborhood').value);
    tr.appendChild(th5);
    tablaAnimal.appendChild(tr);



})