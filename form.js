function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState(""); /* Agregamos una nueva variable
     que es una variable controlada por React*/
  
    const handleSubmit = e => {
      /* Como se le pasa ese parametro 'e' a la función? */
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          {/*onSubmit llama la funcion handleSubmit */}
          <input
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo..."
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </>
    );
  }