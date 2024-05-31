document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input_box");
    const list = document.getElementById("list-cont");

    function addTask() {
        if (input.value.trim() === '') {
            alert("You must add your task; it is compulsory!!!");
        } else {
            let li=document.createElement("li");
            li.innerHTML=input.value;
            list.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        input.value='';
        saveData();
    }
 list.addEventListener("click",function(e){
if(e.target.tagName === 'LI'){
e.target.classList.toggle("checked");saveData();
}
else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();saveData();
}
 },false);
 function saveData(){
    localStorage.setItem("data",list.innerHTML);
 }
 function show(){
    list.innerHTML=localStorage.getItem("data");
 }
 show();
    document.querySelector('button').addEventListener('click', addTask);
});
