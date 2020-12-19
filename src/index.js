import './styles.css';
import {Todo, TodoList} from './classes';
import { agregarHTML, footer } from './js/componentes';


export const todoList = new TodoList();

todoList.cargarLocalTodos();

todoList.todos = todoList.todos.map( Todo.instanciarTodo );

todoList.todos.forEach( agregarHTML );

if( todoList.todos.length <= 0 ){ footer.classList.add('hidden'); }
