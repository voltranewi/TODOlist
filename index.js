function App() {
    /* estos son los estados que deseamos monitorear con React
    Aqui los definimos y los inicializamos */
    const [todos, setTodos] = React.useState([
      //React.useState es un Hook de estado
      {
        text: "learn react",
        isCompleted: false,
      },
      {
        text: "meet friend for lunch",
        isCompleted: false,
      },
      {
        text: "build todo app",
        isCompleted: false,
      },
      {
        text: "clean my code",
        isCompleted: false,
      },
      {
        text: "add it to GitHub",
        isCompleted: false,
      },
    ]);
  
    const addTodo = (text) => {
      const newTodos = [...todos, { text: text, isCompleted: false }];
      setTodos(newTodos);
    };
  
    const removeTodo = (index) => {
      const temp = [...todos];
      temp.splice(index, 1);
      setTodos(temp);
    };
    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => (
              <Todo index={i} key={i} todo={todo} remove={removeTodo} />
              ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  Footer

  