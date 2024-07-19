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
export default function landingPage() {
    return (
        <>
        <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Nuestros servicios"
        title="¿Que ofrecemos?"
        id={`section1`}>
      </SectionTitle>
      <Services />
      <SectionTitle
        pretitle="Nuestros beneficios"
        title=" ¿Por que deberian elegirnos?"
        id={`section3`}>
        Utilizamos métodos de enseñanza modernos y efectivos para asegurar que
        nuestros estudiantes comprendan y dominen los temas.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitTree} />
      <SectionTitle
        pretitle="Planes de pago"
        title = "Planes Asequibles para Todos"
        id={`section2`}>
        Ofrecemos diferentes opciones de suscripción para adaptarnos a tus necesidades y presupuesto.
      </SectionTitle>
      <Pricing />
      
      <SectionTitle
        pretitle="Testimonios"
        title="Lo que nuestros clientes dicen"
        id={`section4`}>
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
    )
}

export const getServerSideProps = async (context) => {
    const { req, res } = context;
    const token = req.cookies.token;
    if (token) {
        return {
            redirect: {
                destination: '/admin',
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
};