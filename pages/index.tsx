import Head from "next/head";
import Navbar from "../components/Navbar/DesktopNav";

import MobileNav from "../components/Navbar/MobileNav";
import Hero from "../components/LandingPage/Hero";
import Why from "../components/LandingPage/Why";
import ContactUs from "../components/LandingPage/ContactUs";
import Footer from "../components/LandingPage/Footer";
import Control from "../components/LandingPage/Control";
import Pricing from "../components/LandingPage/Pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reelin</title>
        <meta
          name="description"
          content="Empowering businesses with AI powered operational and financial tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/use-logo.png" />
      </Head>

      <div className="w-full flex flex-col bg-white  min-h-screen overflow-x-hidden">
        <Navbar />
        <MobileNav />
        <Hero />
        <Why />
        {/* <Control /> */}
        <Pricing />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
