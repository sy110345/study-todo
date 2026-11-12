const input =document.getElementById("studyInput");
const button=document.getElementById("addButton");
const list =document.getElementById("studyList");

button.addEventListener("click",function(){
    const text = input.value.trim();
    if(text===""){
        return;
    }
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
    input.value="";
    input.focus();
});