import "./AddTask.css";

export const AddTask = ( {tasklist, setTasklist} ) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    // console.log(e.target.task.value);
    // console.log(date.getTime);
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }

    setTasklist([...tasklist, newTask]);
    // Clear submit field after adding task:
    e.target.task.value = "";
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="New task title"
          maxLength="25"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
