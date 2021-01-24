var listOfActivites=[];

var input=document.getElementById("input");

var toDoList=document.getElementById("todolist");

document.getElementById("button").onclick=click;

function click(){
    listOfActivites.push(input.value);
    console.log(listOfActivites);
    input.value="";
    showlist();
}
function showlist(){
    toDoList.innerHTML="";
    listOfActivites.forEach(function(current_value, index){
        toDoList.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>edit</a>"+
        "<a onclick='deleteItem("+index+")'>&times</a></li>")
    })
}

function editItem(index){
    var newValue=prompt("Please Insert Your Value");
    listOfActivites.splice(index,1,newValue);
    showlist();
}

function deleteItem(index){
    listOfActivites.splice(index,1);

    showlist();
}