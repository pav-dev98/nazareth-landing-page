import Image from "next/image";
import React from "react";
import Link from "next/link";
import Container from "./container";
import primaria from "../public/img/primaria.jpg";
import secundaria from "../public/img/secundaria.jpg";


const Services  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        <div className="lg:col-span-2 xl:col-auto">
          
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-terColor">
            {/* <p className="text-2xl leading-normal ">
              Nuestro programa de <Mark>primaria</Mark> está diseñado para estudiantes del 1° al 6° grado,ofreciendo clases de lunes a viernes para asegurar el avance y la nivelación de los estudiantes. 
            </p> */}
            <Image
              src={primaria}
              width="500"
              height="auto"
              alt="Primaria"
              className={"object-cover"}
              placeholder="blur"
            >

            </Image>
            <p className="text-2xl leading-normal mt-4">
            Reforzamiento y Nivelación en el nivel <Mark>Primaria</Mark> diseñado para estudiantes del 1° al 6° grado; brindando apoyo y guía en sus tareas escolares, asegurando su crecimiento académico.
            </p>

            <Link href="/" className="text-primColor">
                Saber más
            </Link>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-terColor">
            {/* <p className="text-2xl leading-normal mb-4">
            Tambien sabemos que la universidad esta  al vuelta de la esquina, ofrecemos clases de reforzamiento y avance para estudiantes de 1°, 2° y 3° grado de <Mark>secundaria</Mark>.
            </p> */}
            <Image
              src={primaria}
              width="500"
              height="auto"
              alt="Primaria"
              className={"object-cover"}
              placeholder="blur"
            >
            </Image> 
            <p className="text-2xl leading-normal mb-4 mt-4">
            Reforzamiento y Avance en el nivel <Mark>Secundaria</Mark> diseñado para estudiantes del 1° al 3° grado; con un plan de estudios efocado a clases prácticas y material didáctico personalizado.
            </p>
            <Link href="/" className="text-primColor">
                Saber más
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Services;