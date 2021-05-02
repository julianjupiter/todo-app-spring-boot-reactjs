
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/todo/atoms";

const Todo = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItem = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        console.log(index)
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            complete: !item.complete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div className="p-grid">
            <div className="p-col-4 p-offset-4">
                <div className="p-inputgroup p-mt-2">
                    <Button icon="pi pi-check" className={item.complete ? "p-button-success" : "p-button-primary"} onClick={toggleItemCompletion} />
                    <InputText placeholder="Task" value={item.task} onChange={editItem} />
                    <Button icon="pi pi-times" className="p-button-danger" onClick={deleteItem} />
                </div>
            </div>
        </div>
    );
};

export default Todo;

function replaceItemAtIndex(array, index, newValue) {
    return [...array.slice(0, index), newValue, ...array.slice(index + 1)];
}

function removeItemAtIndex(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}