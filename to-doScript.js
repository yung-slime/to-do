const toDoList = document.querySelector(".to-do-list")
const textFeild = document.querySelector(".text-feild")
const addBtn = document.querySelector(".add-to")

addBtn.addEventListener("click", ()=> {
    const toDo = document.createElement("li")
    toDo.className = "to-do"

    let toDoItem = textFeild.value
    if(toDoItem !== ""){
        toDo.textContent = toDoItem
        textFeild.value = ""
        toDoList.appendChild(toDo)
    }
    else{
        // wanna pop up an alert mentioning that u aint got no todo entered inside the input feild.
        
    }
    
})



