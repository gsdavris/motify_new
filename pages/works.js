import { useRouter } from "next/router";
import Layout from "../components/layouts/Layout";

export default function WorksPage() {
  const router = useRouter();

  const page = {
    en: {
      title: "Motify Athens",
      subtitle: "Our works",
      description:
        "Superfast websites, without compromising on their quality, design and capabilities. Create the user experience of your dreams with page speed and SEO efficiency like never before.",
      image: "/photos/hero.jfif"
    },
    el: {
      title: "Motify Athens",
      subtitle: "Our works",
      description:
        "Ταχύτατες ιστοσελίδες, χωρίς συμβιβασμούς στην ποιότητα, το σχεδιασμό και τις δυνατότητές τους. Δημιουργήστε την εμπειρία χρήστη των ονείρων σας με ταχύτητα και αποτελεσματικότητα SEO όπως ποτέ άλλοτε.",
      image: "/photos/hero.jfif"
    }
  };
  return (
    <Layout page={page[router.locale]}>
      <div>Our works</div>
    </Layout>
  );
}
