import "./AddTask.css";

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
const updatedTasklist = tasklist.map((todo) =>
  todo.id === task.id
    ? {
        id: task.id,
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      }
    : todo
);
setTasklist(updatedTasklist);
    } else {
      const date = new Date();
      // console.log(e.target.task.value);
      // console.log(date.getTime);
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTasklist([...tasklist, newTask]);
      // Clear submit field after adding task:
      e.target.task.value = "";
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name}
          autoComplete="off"
          placeholder="New task title"
          maxLength="25"
          // Added in order to change task title:
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
