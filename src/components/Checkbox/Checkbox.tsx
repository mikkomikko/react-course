import { ChangeEvent, useId } from "react";

interface Props {
  label: string;
  onChange: (value: boolean) => void;
}

export const Checkbox = ({ label, onChange }: Props) => {
  const inputId = useId();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        id={inputId}
        type="checkbox"
        onChange={handleCheckboxChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={inputId}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};
