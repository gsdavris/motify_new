import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Nav from "../navs/Nav";
import StickyNav from "../navs/StickyNav";
import SlideOver from "../layouts/SlideOver";
import Link from "next/link";
import LogoIcon from "../svgs/LogoIcon";

export default function Hero({ page }) {
  const router = useRouter();
  const [sticky, setSticky] = useState(false);

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (400 < windowsScrollTop) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  }, []);

  return (
    <>
      <StickyNav />
      <div className="relative bg-white overflow-hidden">
        <Transition appear={true} show={true}>
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">     
              <LogoIcon />
              <Nav />
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <Transition.Child
                  enter="transition ease-in-out duration-[1200ms] transform"
                  enterFrom="opacity-0 -translate-x-1/3"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-1/3"
                >
                  <div className="sm:text-center lg:text-left">
                    <h1 className="tracking-tight font-extrabold">
                      <span className="block inline text-violet-700 text-5xl md:text-6xl">
                        {page?.title}
                      </span>
                      <br />
                      <span className="block text-gray-900 xl:inline text-4xl md:text-5xl">
                        {page?.subtitle}
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      {page?.description}
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <SlideOver buttonClasses="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 transition duration-500 ease-in-out hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" />
                      </div>
                      {router.asPath !== "/services" && (
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Link href="/services">
                            <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-50 transition duration-500 ease-in-out hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                              {router.locale === "en"
                                ? "Services"
                                : "Υπηρεσίες"}
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </Transition.Child>
              </main>
            </div>
          </div>

          <Transition.Child
            enter="transition ease-in-out duration-[1200ms] transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-1000 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden"
          >
            <img
              className="opacity-75 hover:opacity-100 hover:scale-125 hover:-rotate-[4deg] transition duration-1000 ease-in-out h-56 w-full object-cover object-center lg:object-left-top sm:h-72 md:h-96 lg:w-full lg:h-full z-0"
              src={page?.image}
              alt=""
            />
          </Transition.Child>
        </Transition>
      </div>
    </>
  );
}
