import NextIcon from "../svgs/NextIcon";
import ReactIcon from "../svgs/ReactIcon";
import JamstackIcon from "../svgs/JamstackIcon";
import WooIcon from "../svgs/WooIcon";
import AnimationOnView from "../animations/AnimationOnView";

const features = {
  en: [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces.",
      icon: ReactIcon
    },
    {
      name: "Next.JS",
      description: "The React Framework for Production.",
      icon: NextIcon
    },
    {
      name: "Jamstack",
      description: "The modern way to build that delivers better performance.",
      icon: JamstackIcon
    },
    {
      name: "WooCommerce",
      description: "Open-source eCommerce platform built on WordPress.",
      icon: WooIcon
    }
  ],
  el: [
    {
      name: "React",
      description:
        "Μια βιβλιοθήκη JavaScript για τη δημιουργία διεπαφών χρήστη.",
      icon: ReactIcon
    },
    {
      name: "Next.JS",
      description: "Το React Framework για παραγωγή εφαρμογών και ιστοσελίδων.",
      icon: NextIcon
    },
    {
      name: "Jamstack",
      description:
        "Ο σύγχρονος τρόπος κατασκευής που προσφέρει μέγιστη απόδοση.",
      icon: JamstackIcon
    },
    {
      name: "WooCommerce",
      description:
        "Πλατφόρμα ηλεκτρονικού εμπορίου ανοιχτού κώδικα που βασίζεται στο WordPress.",
      icon: WooIcon
    }
  ]
};

export default function Technologies({ locale }) {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {locale === "en" ? "Technologies" : "Τεχνολογίες"}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {locale === "en"
              ? "Maximize performance and conversions"
              : "Μεγιστοποιήστε την απόδοση και τις μετατροπές"}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {locale === "en"
              ? "Never give a reason for users to leave your page without any action. Increase conversion with flawless UX and attract more people with SEO efficiency like never before."
              : "Ποτέ μην δίνετε λόγο στους χρήστες να εγκαταλείψουν χωρίς καμία ενέργεια. Αυξήστε τις μετατροπές με άψογο UX και προσελκύστε περισσότερους με αποτελεσματικότητα SEO όπως ποτέ άλλοτε."}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {features[locale].map((feature) => (
              <AnimationOnView
                key={feature.name}
                idValue={feature.name}
                enter="transition ease-in-out delay-300 duration-[1300ms] transform"
                enterFrom="opacity-0 -translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-full"
              >
                <div key={feature.name} className="relative ">
                  <dt>
                    <div className="flex items-center justify-center transition duration-500 ease-in-out hover:bg-gray-100 h-18 w-full py-2 rounded-md text-white">
                      <feature.icon className="" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-xl leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
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
