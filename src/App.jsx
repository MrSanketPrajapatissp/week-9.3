import React, { use, useEffect, useState } from "react";
import axios from "axios";


function useTodos(n) {
  const [todos, setTodos] = useState([]); // Ensure initial state is an array
  const [loading, setLoading] = useState(true);

  function getData()
  {
    axios.get(`https://dummyjson.com/todos`).then((res) => {
      // The API returns a single object, so wrap it in an array
      setTodos(res.data.todos);
      setLoading(false);
    });
  }

  useEffect(() => {
     setInterval(() => {
      getData();
     },n * 1000)
     getData();
  }, [n]);

  return { todos: todos,
     loading:loading };
}

function App() {
  const { todos, loading } = useTodos(5);

  if (loading) {
    return <div> loading ...</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <Track key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function Track({ todo }) {
  return (
    <div>
      <div>{todo.todo}</div>
    </div>
  );
}

export default App;
