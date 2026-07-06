const input = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

const task = input.value;

if(task===""){

alert("Enter a task");

return;

}

const li=document.createElement("li");

li.textContent=task;

const delBtn=document.createElement("button");

delBtn.textContent="Delete";

delBtn.classList.add("delete");

delBtn.onclick=function(){

li.remove();

}

li.appendChild(delBtn);

taskList.appendChild(li);

input.value="";

});