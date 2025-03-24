# Same code using swr library 

this library creates custom hooks for you 

```
import React from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

function App() {
  const { data, error, isLoading } = useSWR(`https://dummyjson.com/todos`, fetcher);

  if (error) {
    return <div>Failed to Load</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {data.todos.map((todo) => (
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

```
