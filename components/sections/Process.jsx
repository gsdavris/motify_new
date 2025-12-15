import {
  MailIcon,
  UserGroupIcon,
  LightningBoltIcon,
  PaperAirplaneIcon
} from "@heroicons/react/outline";
import AnimationOnView from "../animations/AnimationOnView";
import Image from "next/image";

const steps = {
  en: [
    {
      name: "Send your ideas or needs",
      description:
        "Tell us what you want to achieve and we will adapt the technical requirements. Or, just send us requirements, if you have them.",
      icon: MailIcon
    },
    {
      name: "Let us adapt",
      description:
        "After a discovery call and further investigation, we will go over your needs, and prepare an initial plan of action. If you accept it, we will choose a dedicated team to take care of your project.",
      icon: UserGroupIcon
    },
    {
      name: "Your project has started",
      description:
        "Depending on requirements, if you hire a small team, or a single dev, they will be ready to work in 72 hours.",
      icon: LightningBoltIcon
    },
    {
      name: "Ready to takeoff",
      description: "Small details and your project is ready for launch!",
      icon: PaperAirplaneIcon
    }
  ],
  el: [
    {
      name: "Στείλτε τις ιδέες ή τις ανάγκες σας",
      description:
        "Πείτε μας τι θέλετε να πετύχετε και θα προσαρμόσουμε τις τεχνικές προδιαγραφές. Ή, απλώς στείλτε μας τις προδιαγραφές σας, εάν τις έχετε.",
      icon: MailIcon
    },
    {
      name: "Ας προσαρμοστούμε",
      description:
        "Μετά από μια διερευνητική κλήση, θα εξετάσουμε τις ανάγκες σας και θα ετοιμάσουμε ένα αρχικό σχέδιο δράσης. Εάν το αποδεχτείτε, θα επιλέξουμε μια ειδική ομάδα για να φροντίσει το έργο σας.",
      icon: UserGroupIcon
    },
    {
      name: "Το project σας ξεκίνησε",
      description:
        "Ανάλογα με τις απαιτήσεις, εάν προσλάβετε μια μικρή ομάδα ή έναν προγραμματιστή, θα είναι έτοιμοι να εργαστούν σε 72 ώρες.",
      icon: LightningBoltIcon
    },
    {
      name: "Έτοιμοι για απογείωση",
      description: "Μικρές λεπτομέρειες και το project σας είναι έτοιμο!",
      icon: PaperAirplaneIcon
    }
  ]
};

const Process = ({ locale }) => {
  return (
    <>
      <div className="relative  py-12 bg-white overflow-hidden">
        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {locale === "en" ? "Process" : "Διαδικασία"}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {locale === "en"
                ? "How to work with us"
                : "Πώς να συνεργαστείτε μαζί μας"}
            </p>
          </div>
          <div className="mt-10 flex md:block">
            <div className="w-2 -mr-8 md:mr-0 h-screen-3/4 md:w-3/4 md:h-1 ml-8 z-0  md:mt-20 -mb-8 bg-gray-200" />
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {steps[locale].map((step) => (
                <AnimationOnView
                  key={step.name}
                  idValue={step.name}
                  enter="transition ease-in-out delay-300 duration-[1300ms] transform"
                  enterFrom="opacity-0 -translate-x-1/2"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-1/2"
                >
                  <div key={step.name} className="relative">
                    <dt>
                      <div className="shadow absolute md:relative transition duration-500 ease-in-out hover:bg-indigo-500 z-10 w-16 h-16 bg-gray-200 p-2 rounded-full flex justify-center items-center text-white">
                        <step.icon className="" aria-hidden="true" />
                      </div>
                      <p className="ml-20 md:ml-4 lg:ml-8 md:mt-4 text-xl leading-6 font-medium text-gray-900">
                        {step.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-20 md:ml-4 lg:ml-8 text-base text-gray-500">
                      {step.description}
                    </dd>
                  </div>
                </AnimationOnView>
              ))}
            </dl>
          </div>
        </div>
        <AnimationOnView
          idValue="rocket"
          enter="transition ease-in-out delay-300 duration-[2000ms] transform"
          enterFrom="opacity-0 translate-y-full"
          enterTo="opacity-100 -translate-y-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="opacity-100 -translate-y-0"
          leaveTo="opacity-0 translate-y-full"
        >
          <div className="z-0 relative mx-auto -mt-36 -mb-12 md:m-0 md:absolute 2xl:right-16 md:-right-48 right-0 -bottom-10">
            <div className="relative w-96 h-96">
              <Image
                className="z-0 opacity-50 hover:opacity-75 transition duration-500 ease-in-out"
                src="/illustrations/rocket.svg"
                layout="fill"
              />
            </div>
          </div>
        </AnimationOnView>
      </div>
    </>
  );
};

export default Process;
