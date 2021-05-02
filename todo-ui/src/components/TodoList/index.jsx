import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListSelector } from "../../recoil/todo/selectors";
import Todo from "../Todo";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListSelector);

    return (
        <Fragment>
            {todoList.map((todo) => <Todo key={todo.id} item={todo} />)}
        </Fragment>
    );
};

export default TodoList;