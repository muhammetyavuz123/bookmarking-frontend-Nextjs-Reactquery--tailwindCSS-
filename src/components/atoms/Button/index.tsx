import { FC } from "react";

export const Button: FC<{ label: String }> = ({ label }) => {
  return (
    <button
      type="submit"
      className="block w-full bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold"
    >
      {label}
    </button>
  );
};
