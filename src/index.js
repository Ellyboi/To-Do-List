/* Imports */
import './styles.css';
import {
  deployList, addToList, editList, removeList,
} from './modules/functionality.js';

const activitiesToDo = [
  {
    description: 'Reading JS Documentation',
    completed: false,
    id: 1,
  },
  {
    description: 'Reading Bootstrap Documentaion',
    completed: false,
    id: 2,
  },
  {
    description: 'DOM Documentaion',
    completed: false,
    id: 3,
  },
];

const taskContainer = document.getElementById('task-list');

const showTasks = () => {
  activitiesToDo.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'task-content';
    taskCard.innerHTML = `<div class="task-text">
                            <input type="checkbox">
                            <p class="task-text">${task.description}</p>
                          </div>
                          <i class="fa-solid fa-trash-can" id="delete-task"></i>`;
    taskContainer.appendChild(taskCard);
  });
};

showTasks();

const taskList = document.getElementById('task-list');
const newTask = document.getElementById('task-input');
const submit = document.getElementById('submit-icon');

/* Add To List */
newTask.addEventListener('keypress', (e) => {
  addToList(e);
});

/* Add to List (clicked) */
submit.addEventListener('click', () => {
  addToList('clicked');
});

/* Delete Task */
taskList.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-task') {
    removeList(li.id);
    event.target.parentElement.remove();
  }
});

/* Edit Task */
taskList.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'task-edit') {
    editList({ index: li.id, event });
  }
});

document.addEventListener('DOMContentLoaded', deployList());