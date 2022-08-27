import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./actions";

function App() {

    const todos = useSelector(state => state.todos)
    const loading = useSelector(state => state.loading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTodos())
    }, [])


  return (
    <div>
        <div><b>List todos:</b></div>
        {loading ? 'loading...' : (
            todos.map(item =>{
                return (
                    <div>{item.title}</div>
                )
            })
        )}
    </div>
  );
}

export default App;
