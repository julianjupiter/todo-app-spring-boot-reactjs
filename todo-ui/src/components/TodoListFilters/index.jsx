import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { SelectButton } from "primereact/selectbutton";
import { todoListFilterAtom } from "../../recoil/todo/atoms";

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterAtom);

    const filterOptions = ["All", "Completed", "Uncompleted"];

    const onChangeUpdateFilter = ({ value }) => {
        console.log(value)
        setFilter(value);
    };

    return (
        <Fragment>
            <div className="p-grid">
                <div className="p-col-4 p-offset-4 p-text-center">
                    <div className="card p-mt-2">
                        <SelectButton value={filter} options={filterOptions} onChange={onChangeUpdateFilter} />
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default TodoListFilters;