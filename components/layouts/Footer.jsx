import Link from "next/link";
import { useRouter } from "next/router";
import FacebookIcon from "../svgs/FacebookIcon";
import InstagramIcon from "../svgs/InstagramIcon";
import SlideOver from "./SlideOver";
import NewsletterSubscribe from "../newsletter/NewsletterSubscribe";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className="relative bg-indigo-100 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {router.locale === "en"
                  ? "Let's keep in touch!"
                  : "Ας κρατήσουμε επαφή!"}
              </h4>
              <h5 className="text-base font-semibold mt-2  text-gray-400">
                {router.locale === "en"
                  ? "Find us on any of these platforms, we respond 1-2 business days."
                  : "Βρείτε μας σε οποιαδήποτε από αυτές τις πλατφόρμες, απαντάμε σε 1-2 εργάσιμες ημέρες."}
              </h5>
              <div className="mt-4 lg:mb-0 mb-6">
                <a
                  className="bg-transparent transition duration-500 ease-in-out hover:bg-indigo-400 shadow font-normal w-16 h-16 inline-flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="https://www.facebook.com/motify.athens"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon className="w-8 h-8" />
                </a>
                <a
                  className="bg-transparent transition duration-500 ease-in-out hover:bg-pink-400 shadow font-normal w-16 h-16 inline-flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="https://www.instagram.com/motify_studio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl mb-2">
                    {router.locale === "en"
                      ? "Useful Links"
                      : "Χρήσιμοι Σύνδεσμοι"}
                  </span>
                  <ul className="list-unstyled mt-2">
                    <li>
                      <Link href="/about">
                        <span className="cursor-pointer text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                          {router.locale === "en"
                            ? "About us"
                            : "Σχετικά με εμάς"}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <SlideOver buttonClasses="w-full lg:w-auto text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" />
                    </li>
                    <li>
                      <Link href="/">
                        <span className="cursor-pointer text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                          {router.locale === "en" ? "Home" : "Αρχική"}
                        </span>
                      </Link>
                    </li>
                    <li className="sr-only">
                      <Link href="/sitemap.xml">
                        <span className="cursor-pointer text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                          Sitemap
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl mb-2">
                    Newsletter
                  </span>
                  <NewsletterSubscribe />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-100" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 font-semibold py-1">
                Copyright © {new Date().getFullYear()} NextJS by{" "}
                <Link href="/">
                  <span className="text-gray-400 tracking-tight font-extrabold hover:text-violet-700 cursor-pointer">
                    Motify Athens
                  </span>
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
