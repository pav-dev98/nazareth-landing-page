import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitTree } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Services from "../components/services";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Pricing from "../components/pricing";


const Home = () => {
  return (
    <>
      <Head>
        <title>Academia Nazaret</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </>
  );
}

export const getServerSideProps = async (context) => {

  return {
    redirect:{
      destination: '/landing-page',
      permanent: false
    }
  };
};
export default Home;