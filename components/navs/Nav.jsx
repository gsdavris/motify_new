/* This Header requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import SlideOver from "../layouts/SlideOver";
import Switcher from "../layouts/Switcher";

const navigation = {
  en: [
    { name: "Home", href: "/" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" }
    // { name: "Works", href: "works" },
  ],
  el: [
    { name: "Αρχική", href: "/" },
    { name: "Υπηρεσίες", href: "services" },
    { name: "Σχετικά", href: "about" }
    // { name: "Έργα", href: "works" },
  ]
};

export default function Nav() {
  const router = useRouter();

  return (
    <Popover>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <span className="cursor-pointer">
                  <span className="sr-only">Workflow</span>
                  <img
                    src="/brand/favicon.svg"
                    alt="Motify Athens"
                    className="h-8 w-auto sm:h-10"
                  />
                </span>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuAlt3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation[router.locale].map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`cursor-pointer ${
                    router.asPath === item.href ||
                    router.asPath === "/" + item.href
                      ? "text-gray-900 underline decoration-4 underline-offset-4 decoration-indigo-400 decoration-wavy"
                      : "text-gray-500"
                  } font-medium text-lg hover:text-gray-900`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <SlideOver buttonClasses="font-medium text-lg text-indigo-700 hover:text-indigo-500" />
            <Switcher buttonClasses="font-medium text-sm text-gray-500 hover:text-indigo-500" />
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-300 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/brand/favicon.svg"
                  alt="Motify Athens"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation[router.locale].map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`cursor-pointer ${
                      router.asPath === item.href ||
                      router.asPath === "/" + item.href
                        ? "text-gray-900 underline decoration-4 underline-offset-8 decoration-indigo-700 decoration-wavy"
                        : "text-gray-500"
                    } block px-3 py-2 rounded-md text-lg font-medium transition duration-500 ease-in-out hover:text-gray-900 hover:bg-gray-100`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            <span className="text-center block w-full px-5 py-3 bg-gray-50 hover:bg-gray-100">
              <Switcher buttonClasses="font-medium text-sm text-gray-500 hover:text-indigo-500" />
            </span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
