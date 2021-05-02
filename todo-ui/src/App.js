import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";
import TodoCreator from "./components/TodoCreator";

import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"
import 'primeflex/primeflex.css';
import "primeicons/primeicons.css";
import "./App.css";
import TodoListFilters from "./components/TodoListFilters";

const App = () => (
  <RecoilRoot>
    <TodoListFilters />
    <TodoCreator />
    <TodoList />
  </RecoilRoot>
);

export default App;
