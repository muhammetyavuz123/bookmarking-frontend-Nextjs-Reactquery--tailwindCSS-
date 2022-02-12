import Link from "next/link";
import { FC } from "react";

export const Breadcrumbs: FC<{ page: string }> = ({ page }) => {
  return (
    <div className="mt-4 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 text-gray-400 text-sm">
        <a className="hover:underline hover:text-gray-600">
          <Link href="/">Ana Sayfa</Link>
        </a>
        <span>
          <svg
            className="h-5 w-5 leading-none text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <a href="#" className="hover:underline hover:text-gray-600">
          {page}
        </a>
      </div>
    </div>
  );
};
