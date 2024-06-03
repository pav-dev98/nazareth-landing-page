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

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Nuestros servicios"
        title="Que ofrecemos?">
        Por el momento nos centramos en lo que concideramos la educacion mas importante, primaria y secundaria.
      </SectionTitle>
      <Services />
      <SectionTitle
        pretitle="Nuestros beneficios"
        title=" Por que deberian elegirnos?">
        Utilizamos métodos de enseñanza modernos y efectivos para asegurar que
        nuestros estudiantes comprendan y dominen los temas.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitTree} />
      <SectionTitle
        pretitle="Ver video"
        title="Solo un hecha un vistazo">
        Echa un vistazo a nuestro video promocional para obtener una idea de lo
        que ofrecemos.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonios"
        title="Lo que nuestros clientes dicen">
        Nuestros clientes están felices y satisfechos con nuestros servicios.
        Aquí hay algunos testimonios de ellos.
      </SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;