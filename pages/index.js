import { useRouter } from "next/router";
import Layout from "../components/layouts/Layout";
import Features from "../components/sections/Features";
import Technologies from "../components/sections/Technologies";
import Cta from "../components/sections/Cta";
import Process from "../components/sections/Process";
import HeaderBanner from "../components/banners/HeaderBanner";

export default function IndexPage() {
  const router = useRouter();

  const page = {
    en: {
      title: "Motify Athens",
      subtitle: "React & Ecommerce Development Team",
      description:
        "Superfast websites, without compromising on their quality, design and capabilities. Create the user experience of your dreams with page speed and SEO efficiency like never before.",
      image: "/photos/hero3d2.jpg"
    },
    el: {
      title: "Motify Athens",
      subtitle: "React & Ecommerce Development Team",
      description:
        "Ταχύτατες ιστοσελίδες, χωρίς συμβιβασμούς στην ποιότητα, το σχεδιασμό και τις δυνατότητές τους. Δημιουργήστε την εμπειρία χρήστη των ονείρων σας με ταχύτητα και αποτελεσματικότητα SEO όπως ποτέ άλλοτε.",
      image: "/photos/hero3d2.jpg"
    }
  };

  return (
    <>
      <HeaderBanner locale={router.locale} />
      <Layout page={page[router.locale]}>
        <Features locale={router.locale} />
        <Technologies locale={router.locale} />
        <Cta locale={router.locale} />
        <Process locale={router.locale} />
      </Layout>
    </>
  );
}
