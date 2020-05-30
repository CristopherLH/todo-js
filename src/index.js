import './styles.css';

import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes.js';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml ); 
// todoList.todos.forEach( todo => crearTodoHtml( todo ) );