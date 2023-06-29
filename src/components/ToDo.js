import React, { useState } from 'react';

const ToDo = () => {

    const [todo,setTodo]=useState('');
    const [todoList,setTodoList]=useState([]);

    function addTodo(){
        setTodoList([...todoList,todo]);
        setTodo('');
    }

    function removeTodo(index){
        let updatedTodo = [];
        todoList.map((e,i)=>{
            if(i != index)
                updatedTodo.push(e);
        });
        setTodoList(updatedTodo);
    }

    return (
        <div>
            <p>To-Do List</p>
            <div>
                <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul>
                {
                    todoList.map((item,index)=><li key={index}>
                        <span>{item}</span><button onClick={()=>{removeTodo(index)}} >Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ToDo;