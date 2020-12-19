import {Todo} from '../classes';
import { todoList } from '../index';

const divTodoList          = document.querySelector('.todo-list');
const newTodoLabel         = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const divFilters           = document.querySelector('.filters');
const filters              = document.querySelectorAll('.filtro');
export const footer               = document.querySelector('.footer');

export const agregarHTML = ( todo ) =>{

    const divElement = document.createElement('div');
    const liElement  = `<li  data-id="${todo.id}">
                        <div class="view">
                            <input class="toggle" type="checkbox">
                            <label>${todo.tarea}</label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="Create a TodoMVC template">
                    </li>`;
    divElement.innerHTML = liElement ;
    divTodoList.append(divElement.firstChild);
}

newTodoLabel.addEventListener("keyup", ( event ) => {

    const labelValue = newTodoLabel.value;

    if( event.keyCode == 13 && labelValue != '' ){
        const nuevoTodo = new Todo( labelValue );
        todoList.agregarTodo( nuevoTodo );
        footer.classList.remove('hidden');
        agregarHTML( nuevoTodo );
        newTodoLabel.value = '';        
    }

});

divTodoList.addEventListener('click', ( event ) => {

    const todoLi = event.target.parentNode.parentNode;

    if( event.target.nodeName == "INPUT" ){
        
        todoLi.classList.toggle('completed');        
        todoList.marcarCompletado( todoLi.getAttribute( 'data-id' ) );
        
       
    }else if( event.target.nodeName == 'BUTTON' ){
        
        todoList.eliminarTodo( todoLi.getAttribute( 'data-id' ));
        divTodoList.removeChild( todoLi );
        if( todoList.todos.length <= 0 ){ footer.classList.add('hidden'); }

    }

})

btnBorrarCompletados.addEventListener('click', () => {

    todoList.eliminarCompletados();
    if( todoList.todos.length <= 0 ){ footer.classList.add('hidden'); }
    const aEliminar = document.querySelectorAll('.completed');

    aEliminar.forEach( nodo => divTodoList.removeChild( nodo ) );

})

divFilters.addEventListener('click', ( event ) =>{
    
    filters.forEach( filter => filter.classList.remove('selected') );    
    event.target.classList.add('selected');
    const filtro = event.target.text;

    if( event.target.classList.contains('filtro') ){

        for( const li of divTodoList.children ){ li.classList.remove('hidden'); }

        switch( filtro ){

            case 'Pendientes':
                for(const li of divTodoList.children){
                    if( li.classList.contains('completed') ){
                        li.classList.toggle('hidden');
                    }                    
                }
                break;

            case 'Completados':
                for(const li of divTodoList.children){
                    if( !li.classList.contains('completed') ){
                        li.classList.toggle('hidden');
                    }                    
                }
                break;           

        }

    }
})




