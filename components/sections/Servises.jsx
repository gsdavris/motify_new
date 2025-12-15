import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import AnimationOnView from "../animations/AnimationOnView";
import {
  CodeIcon,
  ServerIcon,
  ChevronUpIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
  TrendingUpIcon
} from "@heroicons/react/outline";

const myServices = {
  development: {
    en: [
      {
        name: "Website Development",
        description:
          "We are the perfect choice for all your needs and empowering your web identity. We put your business online to attract more traffic, increase conversions and help you generate more leads."
      },
      {
        name: "Ecommerce Development",
        description:
          "We let you run a complete online store with a few clicks through custom e-commerce development to increase your revenue."
      },
      {
        name: "App Development",
        description:
          "We build powerful process-based applications that work efficiently across multiple platforms using a single code base to handle day-to-day business problems. We develop progressive web apps (PWA) for work on all types of devices."
      },
      {
        name: "Migration to Next.JS",
        description: (
          <>
            <p>
              Tired of using outdated technologies and want to give your company
              a real digital boost? Elevate User Experience and deliver a truly
              outstanding service with the hottest React framework on the
              market.
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>Superfast websites and web apps</li>
              <li>Static pages that behave like the dynamic ones</li>
              <li>Become more SEO efficient</li>
              <li>Truly outstanding User Experience</li>
            </ul>
          </>
        )
      }
    ],
    el: [
      {
        name: "Δημιουργία ιστοσελίδων",
        description:
          "Είμαστε η τέλεια επιλογή για κάθε σας ανάγκη, ενισχύοντας την ταυτότητά σας. Θέτουμε την επιχείρησή σας στο διαδίκτυο για να προσελκύσουμε περισσότερη επισκεψιμότητα, να αυξήσουμε τις μετατροπές και να σας βοηθήσουμε να δημιουργήσετε περισσότερους δυνητικούς πελάτες."
      },
      {
        name: "Δημιουργία ηλεκτρονικών καταστημάτων",
        description:
          "Σας παραδίδουμε να διαχειρίζεστε ένα πλήρες ηλεκτρονικό κατάστημα με μερικά κλικ, μέσω προσαρμοσμένης ανάπτυξης ηλεκτρονικού εμπορίου για να αυξήσετε τα έσοδά σας."
      },
      {
        name: "Ανάπτυξη εφαρμογών",
        description:
          "Δημιουργούμε εφαρμογές που λειτουργούν αποτελεσματικά σε πολλές πλατφόρμες χρησιμοποιώντας μια ενιαία βάση κώδικα για να χειρίζονται καθημερινά επιχειρηματικά προβλήματα. Αναπτύσσουμε προοδευτικές εφαρμογές ιστού (PWA) για όλους τους τύπους συσκευών."
      },
      {
        name: "Αναβάθμιση σε Next.JS",
        description: (
          <>
            <p>
              Κουραστήκατε να χρησιμοποιείτε απαρχαιωμένες τεχνολογίες και
              θέλετε να δώσετε στην εταιρεία σας μια πραγματική ψηφιακή ώθηση;
              Αναβαθμίστε την εμπειρία χρήστη και παρέχετε μια πραγματικά
              εξαιρετική υπηρεσία με το πιο καυτό React framework της αγοράς.
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>Εκρηκτικά γρήγοροι ιστότοποι και εφαρμογές</li>
              <li>Στατικές σελίδες που συμπεριφέρονται σαν δυναμικές</li>
              <li>Γίνετε πιο αποτελεσματικοί στο SEO</li>
              <li>Πραγματικά εξαιρετική εμπειρία χρήστη</li>
            </ul>
          </>
        )
      }
    ]
  },
  hosting: {
    en: [
      {
        name: "Shared Hosting",
        description: (
          <>
            <p>
              Shared hosting is the easiest, most economical way to get your
              website connected to the Internet.
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>1 Website</li>
              <li>50 GB SSD Storage</li>
            </ul>
          </>
        )
      },
      {
        name: "Premium Shared Hosting",
        description: (
          <>
            <p>
              Shared hosting is the easiest, most economical way to get your
              website connected to the Internet.
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>Unlimited Websites</li>
              <li>Unlimited Storage</li>
            </ul>
          </>
        )
      },
      {
        name: "Dedicated Server Hosting",
        description: (
          <>
            <p>
              Dedicated hosting provides the highest level of resource
              allocation, privacy, and control.
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>No sharing</li>
              <li>No competition</li>
              <li>No limits</li>
            </ul>
          </>
        )
      }
    ],
    el: [
      {
        name: "Shared Hosting",
        description: (
          <>
            <p>
              Το Shared hosting είναι ο ευκολότερος και πιο οικονομικός τρόπος
              για να συνδέσετε τον ιστότοπό σας στο Διαδίκτυο.
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>1 Website</li>
              <li>50 GB SSD αποθηκευτικού χώρου</li>
            </ul>
          </>
        )
      },
      {
        name: "Premium Shared Hosting",
        description: (
          <>
            <p>
              Το Shared hosting είναι ο ευκολότερος και πιο οικονομικός τρόπος
              για να συνδέσετε τον ιστότοπό σας στο Διαδίκτυο.
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>Απεριόριστα Websites</li>
              <li>Απεριόριστο αποθηκευτικό χώρο</li>
            </ul>
          </>
        )
      },
      {
        name: "Dedicated Server Hosting",
        description: (
          <>
            <p>
              Το Dedicated hosting παρέχει το υψηλότερο επίπεδο πόρων,
              κατανομής, απορρήτου και ελέγχου.
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>Χωρίς διαμοιρασμό</li>
              <li>Χωρίς ανταγωνισμό</li>
              <li>Χωρίς όρια</li>
            </ul>
          </>
        )
      }
    ]
  }
};

function Services({ locale }) {
  return (
    <>
      <div className="relative  py-20 bg-gray-50">
        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap flex-row-reverse items-start">
            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
              <div className="py-2 text-color">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 hover:bg-indigo-400  text-white">
                    <CodeIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {locale === "en" ? (
                    <p className="ml-16 pt-2 sm:pt-0 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Development
                      <span className="hidden lg:inline"> Services</span>
                    </p>
                  ) : (
                    <p className="ml-16 pt-2 sm:pt-0 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      <span className="hidden lg:inline"> Υπηρεσίες</span>{" "}
                      Development
                    </p>
                  )}
                </dt>
                <AnimationOnView
                  idValue="dev"
                  enter={`transition ease-in-out delay-300 duration-[1300ms] transform`}
                  enterFrom="opacity-0 translate-y-1/2"
                  enterTo="opacity-100 -translate-y-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="opacity-100 -translate-y-0"
                  leaveTo="opacity-0 translate-y-1/2"
                >
                  <dd className="text-xl text-gray-500 pt-8">
                    {locale === "en"
                      ? "We take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach."
                      : "Δίνουμε έμφαση στο τι πραγματικά χρειάζεστε αντί να σας πουλάμε ένα εργαλείο γενικής χρήσης που ακολουθεί προσέγγιση 'ένα μέγεθος για όλους'."}
                  </dd>
                </AnimationOnView>
                <dd className="overflow-hidden flex flex-col space-y-4 text-xl text-gray-500 py-8">
                  {myServices.development[locale].map((service) => (
                    <AnimationOnView
                      key={service.name}
                      idValue={service.name}
                      enter={`transition ease-in-out delay-300 duration-[1300ms] transform`}
                      enterFrom="opacity-0 translate-x-1/2"
                      enterTo="opacity-100 -translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="opacity-100 -translate-x-0"
                      leaveTo="opacity-0 translate-x-1/2"
                    >
                      <div>
                        <Disclosure key={service.name}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl leading-6 font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>{service.name}</span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "transform rotate-180" : ""
                                  } w-5 h-5 text-white`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 rounded-lg text-sm bg-white text-gray-500">
                                {service.description}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </AnimationOnView>
                  ))}
                </dd>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <Image
                className="hover:scale-110 transition duration-1000 ease-in-out absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="/photos/services_dev.jpg"
                layout="fill"
                alt=""
                priority
              />
              <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-12">
                <span className="animate-ping absolute -right-2 -top-2 inline-flex h-4 w-4 rounded-full bg-indigo-500"></span>
                <span className="absolute -right-2 -top-2 inline-flex h-4 w-4 rounded-full bg-indigo-500"></span>
                <div className="flex items-center justify-between w-full sm:w-full mb-8">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-300 rounded-md">
                      <LightningBoltIcon className="w-8 text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-1 leading-5 text-gray-800 font-bold text-xl">
                        90 – 100
                      </h3>
                      <p className="text-gray-600 text-xs tracking-normal font-semibold leading-5">
                        Performance
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pl-3 text-green-400">
                      <TrendingUpIcon className="w-8" />
                      <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                        %
                      </p>
                    </div>
                    <p className="font-semibold text-xs text-right leading-4 text-green-400 tracking-normal">
                      Increase
                    </p>
                  </div>
                </div>
                <div className="relative mb-3">
                  <hr className="h-1 rounded-sm bg-gray-200" />
                  <hr className="absolute top-0 h-1 w-11/12 rounded-sm bg-indigo-700" />
                </div>
                <h4 className="text-sm text-gray-600 font-semibold tracking-normal leading-5">
                  PageSpeed Score
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-0 relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start">
            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
              <div className="py-2 text-color">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 hover:bg-indigo-400  text-white">
                    <ServerIcon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  {locale === "en" ? (
                    <p className="ml-16 pt-2 sm:pt-0 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Hosting
                      <span className="hidden lg:inline"> Services</span>
                    </p>
                  ) : (
                    <p className="ml-16 pt-2 sm:pt-0 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      <span className="hidden lg:inline"> Υπηρεσίες</span>{" "}
                      Φιλοξενία<span className="hidden lg:inline">ς</span>
                    </p>
                  )}
                </dt>
                <AnimationOnView
                  idValue="host"
                  enter={`transition ease-in-out delay-300 duration-[1300ms] transform`}
                  enterFrom="opacity-0 translate-y-1/2"
                  enterTo="opacity-100 -translate-y-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="opacity-100 -translate-y-0"
                  leaveTo="opacity-0 translate-y-1/2"
                >
                  <dd className="text-xl text-gray-500 pt-8">
                    {locale === "en"
                      ? "Whether you want to create a website, a blog or an online store, start with a hosting program tailored to your specific needs."
                      : "Είτε θέλετε να δημιουργήσετε έναν ιστότοπο, ένα blog ή ένα ηλεκτρονικό κατάστημα, ξεκινήστε με ένα πρόγραμμα φιλοξενίας προσαρμοσμένο στις ανάγκες σας."}
                  </dd>
                </AnimationOnView>
                <dd className="overflow-hidden flex flex-col space-y-4 text-xl text-gray-500 py-8">
                  {myServices.hosting[locale].map((service) => (
                    <AnimationOnView
                      key={service.name}
                      idValue={service.name}
                      enter={`transition ease-in-out delay-300 duration-[1300ms] transform`}
                      enterFrom="opacity-0 translate-x-1/2"
                      enterTo="opacity-100 -translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="opacity-100 -translate-x-0"
                      leaveTo="opacity-0 translate-x-1/2"
                    >
                      <div>
                        <Disclosure key={service.name}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl leading-6 font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>{service.name}</span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "transform rotate-180" : ""
                                  } w-5 h-5 text-white`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 rounded-lg text-sm bg-white text-gray-500">
                                {service.description}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </AnimationOnView>
                  ))}
                </dd>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <Image
                className="hover:scale-110 transition duration-1000 ease-in-out absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="/photos/services_host.jpg"
                layout="fill"
                alt=""
                priority
              />
              <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-12">
                <span className="animate-ping absolute -right-2 -top-2 inline-flex h-4 w-4 rounded-full bg-indigo-500"></span>
                <span className="absolute -right-2 -top-2 inline-flex h-4 w-4 rounded-full bg-indigo-500"></span>
                <div className="flex items-center justify-between w-full sm:w-full mb-8">
                  <div className="flex items-center">
                    <div className="p-1 bg-green-300 rounded-md">
                      <ShieldCheckIcon className="w-10 text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                        100
                      </h3>
                      <p className="text-gray-600 text-xs tracking-normal font-semibold leading-5">
                        Secure
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pl-3 text-green-400">
                      <TrendingUpIcon className="w-8" />
                    </div>
                    <p className="font-semibold text-xs text-right leading-4 text-green-400 tracking-normal">
                      Scalable
                    </p>
                  </div>
                </div>
                <div className="relative mb-3">
                  <hr className="h-1 rounded-sm bg-gray-200" />
                  <hr className="absolute top-0 h-1 w-11/12 rounded-sm bg-indigo-700" />
                </div>
                <h4 className="text-sm text-gray-600 font-semibold tracking-normal leading-5">
                  Performance & Speed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
