import Link from "next/link";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function HeaderBanner({ locale }) {
  const [show, setShow] = useState(true);
  return (
    <Transition
      appear={true}
      show={show}
      enter="transform transition ease-in-out delay-500 duration-500"
      enterFrom="-translate-y-full"
      enterTo="translate-y-0"
      leave="transform transition ease-in-out duration-500"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-full"
    >
      <div className="bg-indigo-600 ">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              {locale === "en" ? (
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">
                    Get a superfast website at the best price!
                  </span>
                  <span className="hidden md:inline">
                    Big news! Get a superfast website at the best price.
                  </span>
                </p>
              ) : (
                <p className="ml-3 font-medium text-white truncate">
                  Αποκτήστε ένα superfast website στην καλύτερη τιμή!
                </p>
              )}
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link href="/services">
                <span className="cursor-pointer flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                  {locale === "en" ? "Learn more" : "Μάθετε περισσότερα"}
                </span>
              </Link>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
