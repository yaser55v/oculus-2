import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiChevronDown,
} from "react-icons/hi";

const solutions = [
  {
    name: "Products",
    href: "/",
  },
  {
    name: "Apps & Games",
    href: "/",
  },
  {
    name: "Support",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Popover className="z-20 relative bg-white uppercase font-medium font-neomMedium">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/logo.svg"
                alt="logo"
                width={150}
                height={45}
                priority
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-900",
                      "group inline-flex items-center rounded-md bg-white text-sm uppercase font-neomMedium hover:text-gray-500 focus:outline-none"
                    )}
                  >
                    <span>Products</span>
                    <HiChevronDown
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-900",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </>
              )}
            </Popover>
            <a
              href="/"
              className="text-sm font-medium text-gray-900 hover:text-gray-500"
            >
              Apps & Games
            </a>
            <a
              href="/"
              className="text-sm font-medium text-gray-900 hover:text-gray-500"
            >
              Support
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <ul className="flex items-center gap-9 text-sm">
              <li className="text-gray-900 transition hover:text-gray-900/75 cursor-pointer">
                <HiOutlineUser className="h-6 w-6" />
              </li>
              <li className="text-gray-900 transition hover:text-gray-900/75 cursor-pointer">
                <HiOutlineShoppingCart className="h-6 w-6" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="inset-x-0 -top-20 origin-top-right transform p-2 transition md:hidden relative bg-white z-30"
        >
          <div className="divide-y-2 divide-gray-50  h-screen rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    width={150}
                    height={45}
                    priority
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <ul className="flex items-center justify-around gap-9 text-sm">
                  <li className="text-gray-900 transition hover:text-gray-900/75 cursor-pointer">
                    <HiOutlineUser className="h-6 w-6" />
                  </li>
                  <li className="text-gray-900 transition hover:text-gray-900/75 cursor-pointer">
                    <HiOutlineShoppingCart className="h-6 w-6" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
