# Pavel Hancharou
![Pavel Hancharou](https://avatars.githubusercontent.com/u/56205600?s=460&u=23f4bae9d73d56a9b839e5e2942957c620546419&v=4)

## Contact info
* e-mail: pl.hancharou@gmail.com
* social networking service: [LinkedIn](https://www.linkedin.com/in/pavel-hancharou-6611ba1a8/)

## Summary
My goal is to find a new job to work with interesting and job where I can develop my skills working on various projects. I’d like to deal with people who can speak two or more languages. And I'd like to do what I'm interested in - creation of something useful for people. Web-development attracts me by its dynamic interfaces, menus, events. I mastered basic knowledge of HTML5, CSS3, JavaScript.

I achieve my goals. I learned German, lived and worked in Berlin for two years. I’m not afraid of new challenges. 

At my previous job I was able to learn quickly if new approaches or tasks were implemented and even became the best employee of the month. Also I was a mentor for two new employees.

## Skills
* JavaScript 
  * ES5, ES6 and latest
  * Babel
  * OOP
  * RESTful Services
* React
  * JSX
* Node.js
  * npm (Node Package Manager)
  * Express
  * Mongo
  * MySQL
  * GraphQL
* Git
* SASS (LESS, SCSS)
* BEM methodology
* Webpack, Gulp
* ESLint

## Code (Simple ToDo List)
**Add markup:**
```html
<body>
  <header class="header">
    <form class="todo-control">
      <label><input class="header-input" type="text" placeholder="What you want to do?"></label>
      <button class="header-button" id="add"></button>
    </form>
  </header>

  <div class="todo-container">
    <ul class="todo todo-list" id="todo"></ul>
    <ul class="todo todo-completed" id="completed"></ul>
  </div>

  <script src="script.js"></script>
</body>
```
**script.js**
```js
'use strict';

const todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed');

const todoData = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

const render = function () {
  todoList.textContent = '';
  todoCompleted.textContent = '';

  todoData.forEach(function (item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = `<span class="text-todo">` + item.value + `</span>` +
      `<div class="todo-buttons">` +
      `<button class="todo-remove"></button>` +
      `<button class="todo-complete"></button>` +
      `</div>`;

    if (item.completed) {
      todoCompleted.append(li);
      localStorage.setItem('todo', JSON.stringify(todoData));
    } else {
      todoList.append(li);
      localStorage.setItem('todo', JSON.stringify(todoData));
    }

    const todoCompleteBtn = li.querySelector('.todo-complete');
    todoCompleteBtn.addEventListener('click', function () {
      item.completed = !item.completed;
      render();
    });

    const todoRemoveBtn = li.querySelector('.todo-remove');
    todoRemoveBtn.addEventListener('click', function () {
      li.remove(li);
      let index = todoData.indexOf(item);
      if (index > -1) {
        todoData.splice(index, 1);
      }
      localStorage.clear();
      render();
    });

  });
};

todoControl.addEventListener('submit', function (e) {
  e.preventDefault();
  if (headerInput.value !== '') {
    const newTodo = {
      value: headerInput.value,
      completed: false
    };
    todoData.push(newTodo);
    headerInput.value = '';

    render();
  }

});

render();
```

## Experience
* 2021 Udemy - Node JS. Practice course (Express, Mongo, MySQL, GraphQl)
    * [App](https://pure-lowlands-03741.herokuapp.com/)
    * [Code](https://github.com/pavelhancharow/courses_app)
*	2021 Udemy - JavaScript. Practice course (Advanced level)
    * [Landing](https://pavelhancharow.github.io/udemy_js_project-2/dist/index.html)
    * [Code](https://github.com/pavelhancharow/udemy_js_project-2)
*	2020 GLO Academy - Web start/JavaScript
    * [Web start](https://pavelhancharou.ru/universal/)
    * [Code](https://github.com/pavelhancharow/magazine-universal) 
    * [JavaScript](https://pavelhancharou.ru/fitness-club/)
    * [Code](https://pavelhancharow.github.io/fitness-club/)
*	2020 SkillUp - Front End Developing

## Education
**Belarusian National Technical University**  
Bachelor's degree, Electromechanical Engineering  
_2012-2018_

**die Berliner Volkshochschulen**  
German course A2-B2  
_2015-2016_

**Minsk State Higher Radiotechnical College**  
Electronic computing facilities  
_2007-2012_
