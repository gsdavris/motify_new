import {
  EyeIcon,
  BadgeCheckIcon,
  SparklesIcon,
  FireIcon,
  ScaleIcon,
  EmojiHappyIcon
} from "@heroicons/react/outline";
import AnimationOnView from "../animations/AnimationOnView";

const ContentCards = ({ locale }) => {
  const features = {
    en: [
      {
        name: "Modern technologies",
        description:
          "We love Javascript and React, Next.JS is our comfort zone!",
        icon: BadgeCheckIcon
      },
      {
        name: "Years of experience",
        description:
          "Use our experience from many interesting and challenging work. It made us truly agile and flexible.",
        icon: ScaleIcon
      },
      {
        name: "We are ready",
        description: "Need to start things quick? We are ready!",
        icon: FireIcon
      },
      {
        name: "Attention to details",
        description:
          "There are many famous practices in software development, but you still need people who are good at keeping the details in order.",
        icon: EyeIcon
      },
      {
        name: "Small enough, big enough",
        description:
          "Small enough to totally focus on you, big enough to handle even the most demanding projects.",
        icon: SparklesIcon
      },
      {
        name: "Loyal customers",
        description:
          "There is a high chance you will like working with us. Why not give it a try? 90% of our clients came back to work again!",
        icon: EmojiHappyIcon
      }
    ],
    el: [
      {
        name: "Σύγχρονες τεχνολογίες",
        description:
          "Αγαπάμε τη Javascript και τη React, η Next.JS είναι το δικό μας comfort zone!",
        icon: BadgeCheckIcon
      },
      {
        name: "Πολυετής εμπειρία",
        description:
          "Χρησιμοποιήστε την εμπειρία μας από πολλά καινοτόμα και ενδιαφέροντα έργα. Μας έκανε πραγματικά ευέλικτους και δημιουργικούς.",
        icon: ScaleIcon
      },
      {
        name: "Είμαστε έτοιμοι",
        description:
          "Θέλετε να ξεκινήσετε γρήγορα τα πράγματα; Είμαστε έτοιμοι!",
        icon: FireIcon
      },
      {
        name: "Προσοχή στις λεπτομέρειες",
        description:
          "Υπάρχουν πολλές πρακτικές στην ανάπτυξη λογισμικού, αλλά πάντα χρειάζεστε ανθρώπους που είναι καλοί στο να δίνουν προσοχή στη λεπτομέρεια.",
        icon: EyeIcon
      },
      {
        name: "Αρκετά μικροί, αρκετά μεγάλοι",
        description:
          "Αρκετά μικροί για να επικεντρωθούμε αποκλειστικά σε εσάς, αρκετά μεγάλοι για να χειριστούμε ακόμα και τα πιο απαιτητικά έργα.",
        icon: SparklesIcon
      },
      {
        name: "Πιστοί πελάτες",
        description:
          "Υπάρχει μεγάλη πιθανότητα να σας αρέσει να συνεργάζεστε μαζί μας. Γιατί να μην το δοκιμάσετε; Το 90% των πελατών μας εμπιστεύονται ξανά!",
        icon: EmojiHappyIcon
      }
    ]
  };

  return (
    <div className="bg-gradient-to-r from-white via-indigo-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {locale === "en" ? "Core values" : "Βασικές αξίες"}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {locale === "en"
              ? "Reasons to work with us"
              : "Λόγοι για να συνεργαστείτε μαζί μας"}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {locale === "en"
              ? "We use the power of the hottest technology and many years of experience to create and smoothly deliver your new app, eshop or website."
              : "Χρησιμοποιούμε τη δύναμη της τελευταίας τεχνολογίας και πολυετή εμπειρία για να δημιουργήσουμε και να σας παραδώσουμε τη νέα σας εφαρμογή, eshop ή ιστότοπο."}
          </p>
        </div>
        <div className="relative mt-10 overflow-hidden grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features[locale].map((feature, i) => (
            <AnimationOnView
              key={i}
              idValue={feature.name}
              enter="transition ease-in-out duration-[1300ms] transform"
              enterFrom={`opacity-0 ${
                (i + 1) % 2 !== 0 ? "-translate-x-1/2" : "translate-x-1/2"
              }`}
              enterTo={`opacity-100 ${
                (i + 1) % 2 !== 0 ? "translate-x-0" : "translate-x-0"
              }`}
              leave="transition ease-in-out duration-300 transform"
              leaveFrom={`opacity-100 ${
                (i + 1) % 2 !== 0 ? "translate-x-0" : "translate-x-0"
              }`}
              leaveTo={`opacity-0 ${
                (i + 1) % 2 !== 0 ? "-translate-x-1/2" : "translate-x-1/2"
              }`}
            >
              <div className="m-1 flex flex-col justify-between text-left bg-white rounded-lg shadow group hover:shadow-lg">
                <div className="p-5">
                  <div className="flex items-center justify-center p-2 w-12 mb-4 rounded-full bg-indigo-200">
                    <feature.icon className="text-white" />
                  </div>
                  <p className="mb-2 text-xl leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                  <p className="text-sm text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-indigo-500 rounded-lg group-hover:scale-x-100" />
              </div>
            </AnimationOnView>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCards;
