import { useRouter } from "next/router";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";

export default function ConfirmationMessage() {
  const router = useRouter();
  return (
    <Transition
      appear={true}
      show={true}
      enter="transform transition ease-in-out delay-300 duration-500"
      enterFrom="-translate-y-full"
      enterTo="translate-y-0"
      leave="transform transition ease-in-out duration-500"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-full"
    >
      <div className="bg-green-500">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-green-600">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              {router.locale === "en" ? (
                <p className="ml-3 font-medium text-white truncate">
                  Thank you for submitting this form!{" "}
                  <span className="hidden md:inline">
                    Someone should get back to you within 24-48 hours.
                  </span>
                </p>
              ) : (
                <p className="ml-3 font-medium text-white truncate">
                  Σας ευχαριστούμε για την υποβολή αυτής της φόρμας!{" "}
                  <span className="hidden md:inline">
                    Κάποιος θα επικοινωνήσει μαζί σας εντός 24-48 ωρών.
                  </span>
                </p>
              )}
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                onClick={() =>
                  router.replace("/", undefined, { shallow: true })
                }
                className="-mr-1 flex p-2 rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
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
