let text = document.querySelector(".row input");
let btn = document.querySelector(".row button");
let list = document.querySelector(".list-container ul");
let img = document.querySelector(".row img");

btn.addEventListener("click", () => {
    try {
        let li = document.createElement("li");
        li.textContent = text.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "x";
        li.appendChild(span);
        text.value = "";
        saveData();
    } catch (error) {
        console.error("Error adding task:", error);
    }
});

list.addEventListener("click", (e) => {
    try {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked"); 
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData(); 
        }
    } catch (error) {
        console.error("Error updating task:", error);
    }
});

function saveData(){
    try {
        localStorage.setItem("data", list.innerHTML); 
    } catch (error) {
        console.error("Error saving data:", error);
    }
}

function showTask(){
    try {
        list.innerHTML = localStorage.getItem("data");
    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

showTask();
