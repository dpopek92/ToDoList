 //zmienne globalne!
 let taskButton = null;
 let taskSearch = null;
 let taskBoard = null;

 const addTask = function (text) {
   const task = document.createElement('div');
   task.classList.add('todo-task')

   const taskBar = document.createElement('div');
   taskBar.classList.add('todo-task-bar');

   const taskData = new Date();

   const taskRemoveBtn = document.createElement('button');
   taskRemoveBtn.classList.add('button', 'todo-task-remove');
   taskRemoveBtn.textContent = 'X';

   const taskText = document.createElement('div');
   taskText.classList.add('todo-task-text');

   taskBar.textContent = `${taskData.getDate()}-${taskData.getMonth()}-${taskData.getFullYear()}r. ${taskData.getHours()}:${taskData.getMinutes()}`;
   taskBar.appendChild(taskRemoveBtn);

   taskText.textContent = text;

   task.appendChild(taskBar);
   task.appendChild(taskText);

   taskBoard.append(task);
 }

 const searchTask = function () {
   const tasks = [...taskBoard.querySelectorAll('.todo-task-text')];
   tasks.forEach(function (el) {
     if (el.textContent.includes(taskSearch.value)) {
       el.parentElement.style.setProperty('display', '');
     } else {
       el.parentElement.style.setProperty('display', 'none');
     }
   })
 }


 document.addEventListener('DOMContentLoaded', function () {
   //przypisanie do zmiennych globalnych dopiero po wczytaniu drzewa DOM
   taskButton = document.querySelector('#todoButton');
   taskSearch = document.querySelector('#todoSearch');
   taskBoard = document.querySelector('#todoRight');

   taskButton.addEventListener('click', function (e) {
     e.preventDefault();
     const taskMessage = document.querySelector('#todoMessage');
     if (taskMessage.value) {
       addTask(taskMessage.value);
       taskMessage.value = '';
     } else {
       return;
     }
   });

   taskSearch.addEventListener('input', searchTask);
   //e.target wskazuje na referencję do której zastosowano event
   taskBoard.addEventListener('click', function (e) {
     //closest wskazuje na najbliższy obiekt pasujący do selektora
     if (e.target.closest('.todo-task-remove')) {
       e.target.closest('.todo-task').remove();
     }
   })
 });