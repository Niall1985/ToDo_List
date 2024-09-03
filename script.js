const inputBox = document.getElementById("input-box");
const DateBox = document.getElementById("date-input");
const TimeBox = document.getElementById("time-input");
const Timebox = document.getElementById("endtime-input");
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You have not entered anything!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value + "     " + DateBox.value + "     " + TimeBox.value + "     " + Timebox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    DateBox.value = "";
    TimeBox.value = "";
    saveContent();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveContent();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveContent();
    }
}, false);


function saveContent(){
    localStorage.setItem("content", listContainer.innerHTML);
}

function showContent(){
    listContainer.innerHTML = localStorage.getItem("content");
}
showContent();

