export const ShowTask = () => {
    const tasks = [
      { id: 10001, name: "Do dishes", time: "6:30:00 PM 6/25/2024" },
      { id: 10002, name: "Do laundry", time: "7:30:00 AM 6/26/2024" },
      { id: 10003, name: "Do vacuum cleaning", time: "5:00:00 PM 6/28/2024" },
    ];

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">0</span>
            </div>
            <button className="clearAll">Clear All</button>
        </div>
        <ul>
            { tasks.map((task) => (
                <li>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                </li>
            )) }
        </ul>
    </section>
  )
}
