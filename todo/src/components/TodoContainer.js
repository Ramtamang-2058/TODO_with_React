import React from "react"
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
    state = {
        todos: [
        {
            id: 1,
            title: "Setup Development Environment",
            completed:true
        },
        {
            id: 2,
            title: " Develop wesite and add connent in website",
            completed: false
        },
        {
            id: 3,
            title:"Delopy it to live server",
            completed:false
        },
            {
                id:4,
                title: " Have to learn React and Data Structure with algorithms",
                completed: true
            }
        ]
    }
    render(){
        return (
            <ul>
            {this.state.todos.map(todo=>(
                <li>{todo.title}</li>
                ))}
                </ul>
        );
    }
}
export default TodoContainer
