import { RecoilRoot } from "recoil";
import TodoListFilters from "./components/TodoListFilters";
import TodoCreator from "./components/TodoCreator";
import TodoList from "./components/TodoList";

import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"
import 'primeflex/primeflex.css';
import "primeicons/primeicons.css";
import "./App.css";

const App = () => (
  <RecoilRoot>
    <TodoListFilters />
    <TodoCreator />
    <TodoList />
  </RecoilRoot>
);

export default App;
