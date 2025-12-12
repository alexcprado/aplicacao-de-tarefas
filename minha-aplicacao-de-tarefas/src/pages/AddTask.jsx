import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
    const { addTask } = useContext(TaskContext);
    const [taskText, setTaskText] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            text: taskText
        };

        addTask(newTask);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Adicionar Tarefa</h1>

            <input 
                type="text"
                placeholder="Digite a tarefa..."
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    )
}
