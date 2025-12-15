const Details = ({ locale }) => {
  return (
    <div className="relative mt-2">
      <div className="flex flex-wrap ">
        <div className="w-full relative pl-0 ">
          <img
            src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
            className="h-full w-full absolute inset-0 bg-cover bg-center"
            alt="map"
          />
          <div className="w-full flex flex-col items-start relative z-20 p-4 ">
            <div className="w-full">
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {locale === "en" ? "We’re Here" : "Είμαστε δίπλα σας"}
              </h1>
              <div className="w-full md:w-10/12 mt-3">
                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                  {locale === "en"
                    ? "We believe digital innovation is at the heart of every business success"
                    : "Πιστεύουμε ότι η ψηφιακή καινοτομία βρίσκεται στο επίκεντρο κάθε επιχειρηματικής επιτυχίας"}
                </h2>

                <div className="mt-4 md:mt-8">
                  <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                    {locale === "en" ? "Address" : "Διεύθυνση"}
                  </h2>
                  <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                    {locale === "en"
                      ? "Office #13, Athens, Greece"
                      : "Office #13, Αθήνα, Ελλάδα"}
                  </h2>
                </div>
                <div className="mt-4 md:mt-8">
                  <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                    {locale === "en" ? "Contact" : "Επαφή"}
                  </h2>
                  {/* <a
                    href="tel:00306936793095"
                    className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2"
                  >
                    +92 051 4567890 (Phone)
                  </a> */}
                  <a
                    href="tel:00306936793095"
                    className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2"
                  >
                    +30 693 679 3095 {locale === "en" ? "(Cell)" : ""}
                  </a>
                </div>
                <div className="mt-4 md:mt-8">
                  <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                    {locale === "en"
                      ? "Email"
                      : "Διεύθυνση ηλεκτρονικού ταχυδρομείου"}
                  </h2>
                  <a
                    href="mailto:info@motify.gr"
                    className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2"
                  >
                    info@motify.gr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
