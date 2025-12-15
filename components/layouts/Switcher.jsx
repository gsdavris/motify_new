import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Switcher({ buttonClasses }) {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);

  const lang = {
    el: "ελ",
    en: "en"
  };

  const handleChange = async (e) => {
    await setLocale(e.target.value);
  };

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale });
  }, [locale]);

  return (
    <select
      className={`${buttonClasses} capitalize border-transparent rounded-lg shadow`}
      value={locale}
      onChange={handleChange}
    >
      {router.locales.map((locale) => {
        return (
          <option value={locale} key={locale}>
            {lang[locale]}
          </option>
        );
      })}
    </select>
  );
}
