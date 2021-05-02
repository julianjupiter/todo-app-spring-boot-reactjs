import { atom } from "recoil";

const todoListAtom = atom({
    key: "todoListAtom",
    default: []
});

const todoListFilterAtom = atom({
    key: "todoListFilterAtom",
    default: "All",
});

export { todoListAtom, todoListFilterAtom };