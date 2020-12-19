
export class Todo {

    static instanciarTodo( {tarea, date, completado, id} ){

        const instanciar      = new Todo( tarea );
        instanciar.date       = date;
        instanciar.completado = completado;
        instanciar.id         = id;
        
        return instanciar;

    }

    constructor( tarea ){

        this.tarea         = tarea;
        this.date          = new Date();
        this.completado    = false; 
        this.id            = new Date().getTime();

    }

}