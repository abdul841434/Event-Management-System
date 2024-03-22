const currentMonthElement = document.getElementById('current-month');
const currentYearElement = document.getElementById('current-year');
const calendarDaysElement = document.getElementById('calendar-days');
const taskListElement = document.getElementById('task-list');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const tasks = {
  '2024-03-01': ['Finish project report', 'Attend client meeting'],
  '2024-03-10': ['Prepare for presentation'],
  '2024-03-15': ['Submit quarterly review', 'Schedule team meeting']
};

function updateCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  calendarDaysElement.innerHTML = '';

  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement('div');
    calendarDaysElement.appendChild(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.textContent = i;
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    if (tasks[dateString]) {
      dayElement.classList.add('has-task');
      dayElement.addEventListener('click', () => showTasksForDay(dateString));
    }
    calendarDaysElement.appendChild(dayElement);
  }

  currentMonthElement.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
  currentYearElement.textContent = currentYear;
}

function showTasksForDay(dateString) {
  taskListElement.innerHTML = '';
  if (tasks[dateString]) {
    tasks[dateString].forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.textContent = task;
      taskListElement.appendChild(taskElement);
    });
  } else {
    const noTasksElement = document.createElement('div');
    noTasksElement.textContent = 'No tasks for this day.';
    taskListElement.appendChild(noTasksElement);
  }
}

prevMonthButton.addEventListener('click', () => {
  currentMonth = (currentMonth - 1 + 12) % 12;
  if (currentMonth === 11) {
    currentYear--;
  }
  updateCalendar();
});

nextMonthButton.addEventListener('click', () => {
  currentMonth = (currentMonth + 1) % 12;
  if (currentMonth === 0) {
    currentYear++;
  }
  updateCalendar();
});

updateCalendar();