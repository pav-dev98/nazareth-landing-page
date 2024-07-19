import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  IdentificationIcon,
  PuzzlePieceIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  ArchiveBoxArrowDownIcon,
  HomeIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-tree.svg";
import benefitTwoImg from "../public/img/benefit-four.svg";
import benefitTreeImg from "../public/img/12345.svg";

const benefitOne = {
  title: "Solo 12 alumnos por clase",
  desc: "Por que sabemos que la mientras mas pequeño el grupo, mayor la atención que podemos brindar a cada alumno.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Satisfaccion de las necesidades de cada alumno",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Clases dinámicas y participativas",
      desc: "Here you can add the next benefit point.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Mayor rendimiento académico",
      desc: "This will be your last bullet point in this section.",
      icon: <ArrowTrendingUpIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Ambiente seguro y acogedores",
  desc: "Por que sabemos que el entorno es fundamental para el aprendizaje de nuestros estudiantes.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Aulas amplias y carpetas personales",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <HomeIcon />,
    },
    {
      title: "Servicios sanitarios independientes",
      desc: "This template is powered by latest technologies and tools.",
      icon: <ArchiveBoxArrowDownIcon />,
    },
    {
      title: "Aulas con luz natural y ventilación adecuada",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const benefitTree = {
  title: "Educación personalizada",
  desc: "Por que sabemos que la atención personalizada es la clave para el éxito de nuestros estudiantes.",
  image: benefitTreeImg,
  bullets: [
    {
      title: "Seleccionamos el mejor método de enseñanza para cada alumno",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Seguimiento personalizado del progreso de cada alumno",
      desc: "This template is powered by latest technologies and tools.",
      icon: <ClipboardDocumentCheckIcon />,
    },
    {
      title: "Profesores capacitados y comprometidos",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <IdentificationIcon />,
    },
  ],
};


export {benefitOne, benefitTwo , benefitTree};
