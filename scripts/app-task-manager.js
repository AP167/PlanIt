const addtodo=document.querySelector('.addtodo');
const addbtn=document.querySelector('.addBtn');
const todolist=document.querySelector('.todoList');
const donelist=document.querySelector('.doneList');

addbtn.addEventListener('click',addNewTodo);
todolist.addEventListener('click',deleteCheck);
donelist.addEventListener('click',trash);






function addNewTodo(event){
    event.preventDefault();
    const tododiv=document.createElement("div");
    tododiv.classList.add("todo-div");
    const newtodo=document.createElement('li');
    newtodo.innerText=addtodo.value;
    newtodo.classList.add("todoItem");
    tododiv.appendChild(newtodo);

    const doneBtn=document.createElement("button");
    doneBtn.innerHTML='<i class="fas fa-check"></i>';
    doneBtn.classList.add("done-btn");
    tododiv.appendChild(doneBtn);

    const remBtn=document.createElement("button");
    remBtn.innerHTML='<i class="fas fa-times"></i>';
    remBtn.classList.add("rem-btn");
    tododiv.appendChild(remBtn);

    todolist.appendChild(tododiv);
    addtodo.value="";
}


function deleteCheck(e){
    // console.log("working!");
    const item = e.target;
    if(item.classList[0]==="rem-btn"){
        const itemParent = item.parentElement;
        // console.log(itemParent);
        itemParent.remove();
    }
    if(item.classList[0]==="done-btn"){
        const itemParent = item.parentElement;
        // console.log(itemParent);
        // itemParent.classList.toggle("completed");
        item.remove();
        addNewDone(itemParent);
    }
}


function addNewDone(donediv){
    // const donediv=document.createElement("div");
    // donediv.classList.add("done-div");
    // const newdone=document.createElement('li');
    // newdone.innerText=adddone.value;
    // newdone.classList.add("doneItem");
    // donediv.appendChild(newdone);

    // const undoBtn=document.createElement("button");
    // undoBtn.innerHTML='<i class="fas fa-undo"></i>';
    // undoBtn.classList.add("undo-btn");
    // donediv.appendChild(undoBtn);

    // const trashBtn=document.createElement("button");
    // trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    // remBtn.classList.add("trash-btn");
    // donediv.appendChild(trashBtn);

    donelist.appendChild(donediv);
}

function trash(e){
    const item = e.target;
    if(item.classList[0]==="rem-btn"){
        const itemParent = item.parentElement;
        itemParent.remove();
    }
}