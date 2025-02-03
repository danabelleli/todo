/* eslint-disable react/prop-types */
export default function Checkbox({ value, onToggle, todo }) {
  return (
    <fieldset>
      <div className="group grid size-8 grid-cols-1">
        <input
          checked={value}
          onChange={() => onToggle(todo.id)}
          id="comments"
          name="comments"
          type="checkbox"
          aria-describedby="comments-description"
          className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-[#f5748a] checked:bg-[#f5748a] indeterminate:border-[#f5748a] indeterminate:bg-[#f5748a]focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5748a] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        />
        <svg
          fill="none"
          viewBox="0 0 14 14"
          className="pointer-events-none col-start-1 row-start-1 size-4 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-[:checked]:opacity-100"
          />
          <path
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-[:indeterminate]:opacity-100"
          />
        </svg>
      </div>
    </fieldset>
  );
}
