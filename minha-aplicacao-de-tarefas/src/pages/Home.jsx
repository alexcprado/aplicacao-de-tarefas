import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export default function Home() {
    const { tasks, removeTask } = useContext(TaskContext);

    return (
        <div>
            <h1>Minhas Tarefas</h1>

            {tasks.length === 0 && <p>Nenhuma tarefa adicionada.</p>}

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => removeTask(task.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
