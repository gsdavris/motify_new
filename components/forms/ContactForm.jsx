import { useState } from "react";
import { useRouter } from "next/router";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

const ContactForm = ({ changeState }) => {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(true);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    error: "",
    loading: false
  });

  const { firstName, lastName, email, phoneNumber, message, loading, error } =
    values || {};

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      loading: false,
      [name]: event.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.persist();
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });

    try {
      const responce = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      let data = await responce.json();

      if (data.sent) {
        setValues({
          ...values,
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: ""
        });
        e.target.reset();
        router.replace(
          {
            pathname: "/",
            query: { success: true }
          },
          { locale: router.locale }
        );
        setOpenSidebar(false);
        changeState(openSidebar);
      } else {
        setValues({
          ...values,
          error: data.message,
          loading: false
        });
      }
    } catch (error) {
      setValues({
        ...values,
        error: error.message,
        loading: false
      });
    }
  };

  return (
    <div className="md:grid md:grid-cols-2 md:gap-6">
      <div className="md:col-span-2">
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          onBlur={() => setValues({ ...values, error: "" })}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="shadow overflow-hidden rounded-md">
            <div className="px-3 md:px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {router.locale === "en" ? "First name" : "Όνομα"}
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    value={firstName || ""}
                    onChange={handleChange("firstName")}
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {router.locale === "en" ? "Last name" : "Επώνυμο"}
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    value={lastName || ""}
                    onChange={handleChange("lastName")}
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {router.locale === "en"
                      ? "Email address"
                      : "Διεύθυνση ηλεκτρονικού ταχυδρομείου"}
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    value={email || ""}
                    onChange={handleChange("email")}
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {router.locale === "en"
                      ? "Phone number (optional)"
                      : "Αριθμός τηλεφώνου (προαιρετικά)"}
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    value={phoneNumber || ""}
                    onChange={handleChange("phoneNumber")}
                    autoComplete="phone"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="your-message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {router.locale === "en"
                      ? "Your message:"
                      : "Το μήνυμά σας:"}
                  </label>
                  <textarea
                    rows={5}
                    name="your-message"
                    id="your-message"
                    value={message || ""}
                    onChange={handleChange("message")}
                    placeholder={
                      router.locale === "en"
                        ? "Dear Motify..."
                        : "Αγαπητοί  συνεργάτες..."
                    }
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                disabled={!loading ? false : true}
                className="w-full md:w-auto inline-flex justify-center py-2 px-6 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {!loading ? (
                  router.locale === "en" ? (
                    "Submit"
                  ) : (
                    "Υποβολή"
                  )
                ) : (
                  <>
                    <span className="w-6 h-6 mr-2 border-4 border-x-white border-b-white border-t-transparent border-double rounded-full animate-spin" />
                    {router.locale === "en" ? ( "Sending" ) : ( "Αποστολή" )}
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
        {error && (
          <div className="bg-red-400 p-3 rounded-lg my-2">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-start">
                <span className="flex p-1 rounded-lg bg-red-600">
                  <ExclamationCircleIcon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white ">
                  {router.locale === "en"
                    ? "An error occurred: "
                    : "Παρουσιάστηκε σφάλμα: "}
                  {error}
                  <br />
                  {router.locale === "en"
                    ? "Please try again!"
                    : "Παρακαλώ προσπαθήστε ξανα!"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
