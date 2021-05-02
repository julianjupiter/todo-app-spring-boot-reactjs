import { selector } from "recoil";
import { todoListAtom, todoListFilterAtom } from "./atoms";

const filteredTodoListSelector = selector({
    key: 'filteredTodoListSelector',
    get: ({ get }) => {
        const filter = get(todoListFilterAtom);
        const list = get(todoListAtom);

        switch (filter) {
            case 'Completed':
                return list.filter((item) => item.complete);
            case 'Uncompleted':
                return list.filter((item) => !item.complete);
            default:
                return list;
        }
    },
});

export { filteredTodoListSelector };