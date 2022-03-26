const TodoCard = ({title, description, isCompleted}) => {

    

    return(
        <div>
            <h1> {title} </h1>
            <p>{description}</p>
            {isCompleted ? <h4>Completado</h4> : <h4>Sin completar</h4> }
        </div>
    )
}


export default TodoCard