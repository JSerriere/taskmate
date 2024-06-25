import "./AddTask.css";

export const AddTask = ( {tasklist, setTasklist} ) => {
  return (
    <section className="addTask">
      <form>
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
