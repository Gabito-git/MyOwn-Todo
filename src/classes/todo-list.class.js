
export class TodoList {

    constructor( ){

        this.todos = [];

    }

    agregarTodo( todo ){

        this.todos.push( todo );
        this.guardarLocalTodos();
    }

    marcarCompletado( id ){

        for(const todo of this.todos ){
            if( todo.id == id ){todo.completado = !todo.completado;}
        } 
        this.guardarLocalTodos();      

    }

    eliminarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalTodos();

    }

    eliminarCompletados( ){

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalTodos();
       
    }

    guardarLocalTodos( ){

        localStorage.setItem('todos', JSON.stringify( this.todos ));

    }

    cargarLocalTodos( ){

        this.todos = JSON.parse(localStorage.getItem('todos'));

    }

}