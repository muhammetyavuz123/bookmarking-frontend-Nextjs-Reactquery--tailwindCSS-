/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import Link from "next/link";
import { useAuth } from "../../../contexts/authContext";
import { Fragment } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Button } from "../../atoms";

export const Navbar: FC<{}> = ({}) => {
  const { loggedIn, user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" w-full bg-white   pb-7">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2"></Tab.Group>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6"></div>

                {loggedIn ? (
                  ""
                ) : (
                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    <div className="flow-root">
                      <Link href="auth/login" passHref>
                        <a
                          href="#"
                          className="-m-2 p-2 block font-medium text-gray-900"
                        >
                          Giriş
                        </a>
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link href="auth/register" passHref>
                        <a
                          href="#"
                          className="-m-2 p-2 block font-medium text-gray-900"
                        >
                          Kayıt Ol
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className=" shadow-xl  mx-auto px-4 sm:px-6 lg:px-8 "
          >
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/" passHref>
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>

                {/* Flyout menus */}

                <div className="ml-auto flex items-center">
                  {loggedIn ? (
                    ""
                  ) : (
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <Link href="auth/login" passHref>
                        <a
                          href="#"
                          className="text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          Giriş
                        </a>
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                      <Link href="auth/register" passHref>
                        <a
                          href="#"
                          className="text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          Kayıt Ol
                        </a>
                      </Link>
                    </div>
                  )}
                  <div className="hidden lg:ml-8 lg:flex">
                    {user ? (
                      <div className="flex space-x-5">
                        <Link href="/profile" passHref>
                          <a>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mt-[6px]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="gray"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    ) : (
                      <Link href="/profile" passHref>
                        <a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mt-[3px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="gray"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </a>
                      </Link>
                    )}
                  </div>

                  {/* Search */}
                  {/* <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div> */}

                  {/* Cart */}
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
