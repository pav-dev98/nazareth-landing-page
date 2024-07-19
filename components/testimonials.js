import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user4.png";
import userTwoImg from "../public/img/user5.png";
import userThreeImg from "../public/img/user6.png";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-terColor">
            {/* <p className="text-2xl leading-normal ">
              ¡Profesores <Mark>pacientes!</Mark> Mi hija Sofía ya no tiene miedo a las matemáticas.
            </p> */}
            <p className="text-2xl leading-normal ">
            ¡Profesores dedicados! Mi hija ha mejorado notablemente en sus calificaciones de matemáticas.
            </p>

            <Avatar
              image={userOneImg}
              name="Marian Perez"
              title="Tingo Maria"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-terColor">
            <p className="text-2xl leading-normal ">
            ¡Recomendado! Mis hijos disfrutan las clases y se sienten más seguros en sus exámenes.
            </p>

            <Avatar
              image={userTwoImg}
              name="Karla Garcia"
              title="Castillo Grande"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-terColor">
            <p className="text-2xl leading-normal ">
            ¡Grandes resultados! Mis hijos ahora están más atentos y participativos en clase.
            </p>

            <Avatar
              image={userThreeImg}
              name="Ana Lopez"
              title="Tingo Maria"
            />
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

export default Testimonials;