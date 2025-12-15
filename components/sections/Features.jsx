import AnimationOnView from "../animations/AnimationOnView";
import {
  ServerIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ShoppingBagIcon
} from "@heroicons/react/outline";

const features = {
  en: [
    {
      name: "Website Development",
      description:
        "We create websites to attract visitors, drive leads, convert them into customers and encourage them to come back.",
      icon: GlobeAltIcon
    },
    {
      name: "Ecommerce Development",
      description:
        "Our specialists build your e-commerce site in a unique way, considering your specific needs and keeping the future in mind.",
      icon: ShoppingBagIcon
    },
    {
      name: "App Development",
      description:
        "We create the appropriate web application for your business, depending on your business needs.",
      icon: LightningBoltIcon
    },
    {
      name: "Web Hosting",
      description:
        "Fast and Secure Web Hosting for successful personal and business websites.",
      icon: ServerIcon
    }
  ],
  el: [
    {
      name: "Δημιουργία ιστοσελίδων",
      description:
        "Δημιουργούμε ιστότοπους που προσελκύουν επισκέπτες, δημιουργούν ευκαιρίες, τις μετατρέπουν σε πελάτες και τους ενθαρρύνουν να επιστρέψουν.",
      icon: GlobeAltIcon
    },
    {
      name: "Δημιουργία ηλεκτρονικών καταστημάτων",
      description:
        "Οι ειδικοί μας κατασκευάζουν το eshop σας με μοναδικό τρόπο, λαμβάνοντας υπόψη τις ανάγκες σας και τη μελλοντική του εξέλιξη.",
      icon: ShoppingBagIcon
    },
    {
      name: "Ανάπτυξη εφαρμογών",
      description:
        "Δημιουργούμε την κατάλληλη εφαρμογή για την επιχείρησή σας, ανάλογα με τις ανάγκες της.",
      icon: LightningBoltIcon
    },
    {
      name: "Φιλοξενία ιστοσελίδων",
      description:
        "Γρήγορη και ασφαλής φιλοξενία για επιτυχημένα προσωπικά και επιχειρηματικά websites.",
      icon: ServerIcon
    }
  ]
};

export default function Features({ locale }) {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {locale === "en" ? "Specialities" : "Ειδικότητες"}
          </h2>

          {locale === "en" ? (
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Elevate <span className="text-indigo-600">U</span>ser e
              <span className="text-indigo-600">X</span>perience with us
            </p>
          ) : (
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Αναβαθμίστε την εμπειρία χρήστη μαζί μας
            </p>
          )}

          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {locale === "en"
              ? "We use the power of the hottest technology and many years of experience to create and smoothly deliver your new app, eshop or website."
              : "Χρησιμοποιούμε τη δύναμη της τελευταίας τεχνολογίας και πολυετή εμπειρία για να δημιουργήσουμε και να σας παραδώσουμε τη νέα σας εφαρμογή, eshop ή ιστότοπο."}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features[locale].map((feature) => (
              <AnimationOnView
                key={feature.name}
                idValue={feature.name}
                enter={`transition ease-in-out delay-300 duration-[1300ms] transform`}
                enterFrom="opacity-0 -translate-x-1/2"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-1/2"
              >
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 hover:bg-indigo-400  text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-xl leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              </AnimationOnView>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
