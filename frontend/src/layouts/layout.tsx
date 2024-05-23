import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="">
      <Header />
      <Hero />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
