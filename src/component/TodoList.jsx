import { useEffect, useState } from "react";

const FIND_ALL_URL = "http://localhost:9090/api/v1/todos";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(FIND_ALL_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>priority</th>
          <th>description</th>
          <th>is done</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          console.log("inside : " + JSON.stringify(todo));
          return (
            <tr key={todo.id}>
              <td>{todo.priority}</td>
              <td>{todo.description}</td>
              <td>{todo.isDone.toString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoList;
