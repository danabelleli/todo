/* eslint-disable react/prop-types */
import { TrashIcon } from "@heroicons/react/24/outline";
import Checkbox from "./Checkbox";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="py-4 flex lg:items-center gap-4">
      <Checkbox value={todo.isChecked} onToggle={onToggle} todo={todo} />
      {todo.content}
      <button
        className="cursor-pointer ml-auto"
        onClick={() => onDelete(todo.id)}
      >
        <TrashIcon className="size-8" />
      </button>
    </li>
  );
}

export default TodoItem;
