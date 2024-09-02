const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You have not entered anything!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
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