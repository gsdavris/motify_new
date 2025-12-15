import { useRouter } from "next/router";
import Layout from "../components/layouts/Layout";
import ContentCards from "../components/sections/ContentCards";
import Cta from "../components/sections/Cta";

export default function AboutPage() {
  const router = useRouter();

  const page = {
    en: {
      title: "Motify Athens",
      subtitle: "Why Us?!",
      description:
        "Superfast websites, without compromising on their quality, design and capabilities. Create the user experience of your dreams with page speed and SEO efficiency like never before.",
      image: "/photos/about.jpg"
    },
    el: {
      title: "Motify Athens",
      subtitle: "Why Us?!",
      description:
        "Ταχύτατες ιστοσελίδες, χωρίς συμβιβασμούς στην ποιότητα, το σχεδιασμό και τις δυνατότητές τους. Δημιουργήστε την εμπειρία χρήστη των ονείρων σας με ταχύτητα και αποτελεσματικότητα SEO όπως ποτέ άλλοτε.",
      image: "/photos/about.jpg"
    }
  };
  return (
    <Layout page={page[router.locale]}>
      <ContentCards locale={router.locale} />
      <Cta locale={router.locale} />
    </Layout>
  );
}
