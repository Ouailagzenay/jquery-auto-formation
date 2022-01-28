var workManager = new WorkManager();
var insertRow = null;
var rowId = null;
insertNewRow();

$(document).ready(function(){
    $("#submitButton").click(function(event){
        event.preventDefault();
        let work = readwork(); 
    if(insertRow == null){
        
        workManager.addWork(work); 
    }else{
    if(confirm('etes vous sur de modifer cet film')){
    work.id = rowId;
    workManager.modiferOuvrage(work) ;
}
}
insertNewRow();
resetForm();
    })
    
})

function resetForm() {
    $("#inputTitle").val(' ');
    insertRow = null;


}

function readwork() {
    var work = new Work();
    work.title = $("#inputTitle").val();
    return work;
}



function insertNewRow() {
    var workList = workManager.workList
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

      
        $(cell3).append('<button id="modifer">modiffer</button>')
        $('#modifer').attr('onClick','modiffer(this)');
        $(cell3).append('<button>delete</button>')
    }

}
function modiffer(buttonReference){ 
    selectRow = buttonReference.parentElement.parentElement
    rowId =  selectRow.cells[0].innerHTML;
   var work = new Work();
   work = workManager.getItem(rowId)
   document.getElementById("inputTitle").value = work.title;
  
}
