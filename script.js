// localStorage.setItem('name','Shreyas');
// sessionStorage.setItem('name','Hello');

const name = localStorage.getItem('name');
console.log(name)
// localStorage.clear()

document.querySelector('form').addEventListener('submit',function(e){
    const task = document.querySelector('#task').value;

    let tasks;
    if(localStorage.getItem('task')===null){
        tasks = [];
    }else{
        tasks = localStorage.getItem('tasks')
    }
    tasks.push(task)
    document.write(task)
    localStorage.setItem('tasks',JSON.stringify(tasks));

})