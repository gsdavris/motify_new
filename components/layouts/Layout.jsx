import { useRouter } from "next/router";
import Hero from "./Hero";
import Footer from "./Footer";
import BackTop from "./BackTop";
import ConfirmationMessage from "../banners/ConfirmationMessage";

const Layout = ({ children, page }) => {
  const router = useRouter();
  return (
    <>
      {router.query?.success && router.query.success === "true" && (
        <ConfirmationMessage />
      )}
      <Hero page={page} />
      <main>{children}</main>
      <Footer />
      <BackTop />
    </>
  );
};

export default Layout;
