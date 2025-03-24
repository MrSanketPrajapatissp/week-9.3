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
## 1 IsOnline code: 
Create a hook that returns true or false based on weather the user is currently online
You are given that - 
window.navigator.onLine returns true or false based on weather the user is online
You can attach the following event listeners to listen to weather the user is online or not
window.addEventListener('online', () => console.log('Became online'));
window.addEventListener('offline', () => console.log('Became offline'));
```
import React, { useEffect, useState } from "react";

function useIsOnline() {
  const [Isonline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return Isonline;
}

function App() {
  const Isonline = useIsOnline();

  if (Isonline) {
    return <div>Your are online Yay!</div>;
  }

  return <div>Your are offline</div>;
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
## 2. useMousePointer hook
Create a hook that returns you the current mouse pointer position.
The final react app that uses it looks like this
```
import React, {  useEffect, useState } from "react";

function useMousePointer() {
 
  const [position, setPosition] = useState({x : 0, y: 0});
  
  const handleMouseMove = (e) => {
    setPosition({x:e.clientX, y:e.clientY});
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  },[]);
  
  return position;
}

function App()
{
  const mousePointer = useMousePointer(0);


  return <div>
    Your Mouse Position is {mousePointer.x} {mousePointer.y}
  </div>
}

export default App;
```

## performance / Timer Based Hooks: 
### 1 useInterval: 
```
import React, { useEffect, useState } from "react";

function useInterval(fn, timeout) {
  useEffect(() => {
   setInterval(fn, timeout);
   
  }, [])
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  },1000)

  return <div>Timer is at : {count}</div>;
}

export default App;
```
### 2 useDebounce: 
```
import React, {  useEffect, useState } from "react";

function useDebounce(value, timeout)
{

  const [debouncedValue, setDebouncedValue] = useState(value);
    
   useEffect(() => {
   let timeoutNumber =  setTimeout(() => {
      setDebouncedValue(value)
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    }
   }, [value])

   return debouncedValue;
}

function App()
{
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);


  return <div>
    Debounced Value is {debouncedValue}
    <input type="text" onChange={e => setValue(e.target.value)}/>
  </div>
}

export default App;
```

