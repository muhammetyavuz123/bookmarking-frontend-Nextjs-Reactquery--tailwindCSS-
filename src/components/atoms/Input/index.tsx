/* eslint-disable react/display-name */
import { FC } from "react";

import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = HTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  Partial<UseFormRegisterReturn> & { type?: string } & {
    placeholder?: string;
    label?: string;
  };

export const Input = forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
  ({ label, name, placeholder, ...rest }, ref) => (
    <div>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        className="mt-5 w-full text-black h-14 pl-5 rounded shadow-md border border-[#D7EBE6] focus:outline-none  focus:border-yellow-specificYellow  placeholder-gray-specificGray  "
        {...{ ...rest, name }}
        ref={ref}
      />
    </div>
  )
);
