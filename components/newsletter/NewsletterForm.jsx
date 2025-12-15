import { useState } from "react";
import { useRouter } from "next/router";
import { sanitize } from "../../utils/miscellaneous";

const NewsletterForm = ({ status, message, onValidated }) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && -1 < email.indexOf("@") && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (13 === event.keyCode) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div className="mt-2">
      <h5 className="text-base font-semibold mt-2 mb-3 text-gray-400">
        {router.locale === "en"
          ? "Subscribe and stay updated on the latest developments."
          : "Εγγραφείτε και μείνετε ενημερωμένοι για τις τελευταίες εξελίξεις."}
      </h5>
      <div className="flex w-full justify-center">
        <div className="relative">
          <div className="mc-field-group">
            <input
              onChange={(event) => setEmail(event?.target?.value ?? "")}
              type="email"
              placeholder={
                router.locale === "en" ? "Your email" : "Το email σας"
              }
              className="h-14 border-transparent w-auto pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
              onKeyUp={(event) => handleInputKeyEvent(event)}
            />
          </div>
          <div className="absolute top-2 right-2">
            <button
              className="h-10 w-20 text-white rounded-lg bg-indigo-400 focus:outline-none hover:bg-indigo-600"
              onClick={handleFormSubmit}
            >
              {router.locale === "en" ? "Sign Up" : "Εγγραφή"}
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-[42px]">
        {"sending" === status ? (
          <div className="mt-4 w-full md:w-auto inline-flex justify-center py-2 px-6 border border-transparent shadow-sm font-medium rounded-lg text-white bg-indigo-400">
            <span className="w-6 h-6 mr-2 border-4 border-x-white border-b-white border-t-transparent border-double rounded-full animate-spin" />
            Sending
          </div>
        ) : null}
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="text-green-600 font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
