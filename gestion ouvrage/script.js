var workManager = new WorkManager();
var selectedRow = null;
var rowId = null;


$(document).ready(function(){
    $("#submitButton").click(function(event){
        event.preventDefault();
    work = readwork();
    workManager.addWork(work);
    insertNewRow();
    resetForm();
    })
})

function resetForm() {
    $("#inputTitle").val(' ');
    selectedRow = null;
}



function readwork() {
    var work = new Work();
    work.title = $("#inputTitle").val();
    return work;
}



function insertNewRow() {
    var workList = workManager.getAllItems()
    var tableBody = $("#worksTable").children('tbody')[0];


    while (tableBody.rows.length > 0) {
        tableBody.deleteRow(0);
    }


    for (var i = 0; i < workList.length; i++) {
        var newRow = tableBody.insertRow(tableBody.length);
        newRow.insertCell(0).innerHTML = workList[i].id;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = workList[i].title;
        cell3 = newRow.insertCell(2)

      
        $(cell3).append('<button>modiffer</button>')
        $(cell3).append('<button>delete</button>')
    }

}






