
// event listeners
// document.addEventListener('DOMContentLoaded', init, false);
// function init() {

    const taskcontainer = document.getElementsByClassName('task__name')
    const schedulecontainer = document.getElementsByClassName('schedule__container')
    
    const MathsTask = document.getElementById('MathsTask');
    const SciTask = document.getElementById('SciTask');
    const SstTask = document.getElementById('SstTask');
    const BreakTask = document.getElementById('BreakTask');
    const CscTask = document.getElementById('CscTask');
    const EngTask = document.getElementById('EngTask');
    const deselectBtn = document.getElementById('deselect');
    const resetBtn = document.getElementById('deleteBtn');
    const popUp = document.getElementById('pop-up__container');
    const noBtn = document.getElementById('btn__no');
    const yesBtn = document.getElementById('btn__yes');
    console.log(yesBtn);
    let selectedColor, active

   
   for (let index = 0; index < taskcontainer.length; index++) {
    taskcontainer[index].addEventListener('click', selectTask);    
   }
   for (let index = 0; index < schedulecontainer.length; index++) {
    schedulecontainer[index].addEventListener('click', setColors);    
   }
    if (taskcontainer) {
        taskcontainer.addEventListener('click', selectTask);
    }
    if (schedulecontainer) {
        schedulecontainer.addEventListener('click', setColors);
    }
    if (deselectBtn) {
        deselectBtn.addEventListener('click', resetTasks);
    }
    if (resetBtn) {
        resetBtn.addEventListener('click', openPopup);
    }
    if (noBtn) {
        noBtn.addEventListener('click', closePopup);
    }
    if (yesBtn) {
        console.log('here');
        yesBtn.addEventListener('click', deleteTasks);
    }
    function selectTask(e) {
        resetTasks();
        taskColor = e.target.style.backgroundColor;

        console.log(e.target.id);
        switch (e.target.id) {
            case 'MathsTask':
                activeTask(MathsTask, taskColor);
                break;
            case 'SciTask':
                activeTask(SciTask, taskColor);
                break;
            case 'SstTask':
                activeTask(SstTask, taskColor);
                break;
            case 'BreakTask':
                activeTask(BreakTask, taskColor);
                break;
            case 'CscTask':
                activeTask(CscTask, taskColor);
                break;
            case 'EngTask':
                activeTask(EngTask, taskColor);
                break;
        }
    }
    
    
    // Set Colors for schedule
    function setColors(e) {
        if (e.target.classList.contains('task') && active == true) {
            e.target.style.backgroundColor = selectedColor;
        
        }
    }
    // select task
    function activeTask(task, color) {
        task.classList.toggle('selected');
    
        if (task.classList.contains('selected')) {
            active = true;
            selectedColor = color;
            return selectedColor;
        } else {
            active = false;
        }
    }
    
    // Reset Tasks
    
    function resetTasks() {
       
        const allTasks = document.querySelectorAll('.task__name');
        allTasks.forEach((item) => {
            item.className = 'task__name';
        })
    }
    
    //  Delete tasks
    function deleteTasks() {
        const tasks = document.getElementsByClassName('task');
       console.log(tasks);
        tasks.forEach((item) => {
            item.innerHTML = '';
            item.style.backgroundColor = 'white';
        })
        closePopup();
    }
    
    // Open pop-up

    function openPopup() {
        console.log(popUp)
       if (popUp.style.display == 'none'){
           popUp.style.display = "flex";

       };
    }
    
    // Open pop-up
    function closePopup() {
       if (popUp.style.display == 'flex'){
        popUp.style.display = "none";
       };
    }

// Task click
