import { FC } from "react";

export const SelectInput: FC<{
  name: string;
  placeholder?: string;
  id: string;
  label?: string;
  optionList: {
    optionName: string;
  }[];
}> = ({ name, placeholder, id, label, optionList }) => {
  return (
    <>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <select
        name={name}
        id={id}
        autoComplete="country"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {optionList.map(({ optionName }, index) => (
          <option key={index}>{optionName}</option>
        ))}
      </select>
    </>
  );
};
