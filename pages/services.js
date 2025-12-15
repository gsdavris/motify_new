import { useRouter } from "next/router";
import Layout from "../components/layouts/Layout";
import Services from "../components/sections/Servises";

export default function ServicesPage() {
  const router = useRouter();

  const page = {
    en: {
      title: "Motify Athens",
      subtitle: "React & Ecommerce Development Team",
      description:
        "Superfast websites, without compromising on their quality, design and capabilities. Create the user experience of your dreams with page speed and SEO efficiency like never before.",
      image: "/photos/hero3d.jpg"
    },
    el: {
      title: "Motify Athens",
      subtitle: "React & Ecommerce Development Team",
      description:
        "Ταχύτατες ιστοσελίδες, χωρίς συμβιβασμούς στην ποιότητα, το σχεδιασμό και τις δυνατότητές τους. Δημιουργήστε την εμπειρία χρήστη των ονείρων σας με ταχύτητα και αποτελεσματικότητα SEO όπως ποτέ άλλοτε.",
      image: "/photos/hero3d.jpg"
    }
  };
  return (
    <Layout page={page[router.locale]}>
      <Services locale={router.locale} />
    </Layout>
  );
}
