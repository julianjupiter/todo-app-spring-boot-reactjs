import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/todo/atoms";

const TodoCreator = () => {
    const [task, setTask] = useState("");
    const setTodoList = useSetRecoilState(todoListAtom);
    const disabled = task === "";

    const onChangeSetTask = ({ target: { value } }) => {
        setTask(value);
    };

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: generateId(),
                task: task,
                complete: false,
            },
        ]);
        setTask("");
    };

    return (
        <div className="p-grid">
            <div className="p-col-4 p-offset-4">
                <div className="p-inputgroup p-mt-2">
                    <InputText placeholder="Task" value={task} onChange={onChangeSetTask} />
                    <Button icon="pi pi-plus" className="p-button-primary" onClick={addItem} disabled={disabled} />
                </div>
            </div>
        </div>
    );
};

export default TodoCreator;

let id = 0;
function generateId() {
    return id++;
}