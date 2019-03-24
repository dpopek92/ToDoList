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

  
    //Data
    taskBar.textContent = `${addZero(taskData.getDate())}-${addZero(taskData.getMonth())}-${addZero(taskData.getFullYear())}r. ${addZero(taskData.getHours())}:${addZero(taskData.getMinutes())}`;
     //RemoveButton
    taskBar.appendChild(taskRemoveBtn);
    //Zawartość
    taskText.textContent = text;

    task.appendChild(taskBar);
    task.appendChild(taskText);

    taskBoard.append(task);
  }

  const addZero = function (date) {
    if (date < 10) {
      return '0' + date
    } else {
      return date
    }
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

    taskBoard.addEventListener('click', function (e) {
      if (e.target.closest('.todo-task-remove')) {
        e.target.closest('.todo-task').remove();
      }
    })
  });
