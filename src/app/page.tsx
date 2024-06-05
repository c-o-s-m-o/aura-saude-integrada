"use client";
import Image from "next/image";

import Bacground2 from "./../../public/backgroud2.jpg";
import Bacground3 from "./../../public/backgroud3.png";
import ImagemPrimeira from "./../../public/capa1.png";
import Imagem7 from "./../../public/imagem7.jpg";
import Imagem8 from "./../../public/imagem8.jpg";
import Imagem9 from "./../../public/imagem9.jpeg";
import Imagem10 from "./../../public/imagem10.jpg";

import { Navbarr } from "./components/navbar";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Navbarr />

      <section className="w-full relative  bg-center  bg-[#515B28] bg-blend-multiply">
        <Image
          className="bg-center object-cover blur-sm "
          src="https://res.cloudinary.com/dtnww1ler/image/upload/v1717428957/cl%C3%ADnica%20aura/background01.png"
          alt="imagem background 01"
          fill={true}
        />
        <div className="relative max-w-screen-xl flex   items-center justify-evenly mx-auto p-2 ">
          <div className="relative z-1  w-full">
            <div className="w-full relative flex flex-col md:flex-row overflow-hidden  xl:h-[46rem] space-y-2 py-8">
              <div className="relative  text-white flex flex-col gap-7">
                <div className="flex w-full flex-col h-full mx-auto justify-center  text-justify gap-6 ">
                  <section className="text-center md:text-start gap-6 flex flex-col ">
                    <strong className="font-bold text-6xl space-y-2 text">
                      <p>Aqui a</p>
                      <p>prioridade</p>
                      <p>é vocé!</p>
                    </strong>
                    <strong className="text-sm md:text-base   font-medium">
                      <p>Oferecemos cuidados que elevam sua sáude e beleza.</p>

                      <p>Seja bem-vindo ao seu novo capítulo de bem-estar</p>
                      <p>Descubra o seu melhor em cada atendimento</p>
                    </strong>
                  </section>

                  <div className=" flex flex-col  items-center gap-4">
                    <div className="inline-flex w-full">
                      <a
                        href="https://api.whatsapp.com/send?phone=5561982624920&text=Ol%C3%A1%2C+vim+do+Instagram%2C+gostaria+de+agendar+uma+consulta"
                        type="button"
                        className="  w-full py-2.5  text-center mb-2 text-sm font-medium text-[#515B28] focus:outline-none bg-white   rounded-lg  hover:bg-[#515B28] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
                      >
                        AGENDAR MIMHA CONSULTA
                      </a>
                    </div>
                    <div className="inline-flex gap-2 ">
                      <a
                        className="inline-block w-14 h-14 bg-white rounded-full text-[#515B28] hover:text-white p-2 hover:bg-[#515B28]"
                        href="https://www.instagram.com/clinicaaura.planaltina/"
                      >
                        <svg
                          className="w-full h-full"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        className="inline-block w-14 h-14 bg-white rounded-full text-[#515B28] hover:text-white p-2 hover:bg-[#515B28]"
                        href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5561982624920%26text%3DOl%25C3%25A1%252C%2Bvim%2Bdo%2BInstagram%252C%2Bgostaria%2Bde%2Bagendar%2Buma%2Bconsulta&e=AT1ZdPZaOwprdiSs8-Wqnng80vU1xPEc_tI6i05HMje2RHSFCD_r9wefefztQH6QbzhE2jUacvdShyt_tobFaAY2t17ktNtMI_tJAxiG39f8oRhS"
                      >
                        <svg
                          className="w-full h-full  "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                            clip-rule="evenodd"
                          />
                          <path
                            fill="currentColor"
                            d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative  inline-flex justify-center items-center mx-auto  ">
                <Image
                  src="https://res.cloudinary.com/dtnww1ler/image/upload/v1717429018/cl%C3%ADnica%20aura/imagem01.png"
                  className="object-cover "
                  alt={""}
                  width={700}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full relative bg-[#d1c9e2]">
        <Image
          className="bg-center  object-cover "
          src="https://res.cloudinary.com/dtnww1ler/image/upload/v1717614154/cl%C3%ADnica%20aura/background02.jpg"
          alt="imagem background 02"
          fill={true}
        />
        <div className=" relative max-w-screen-xl flex flex-col   mx-auto  h-full  w-full ">
          <div className="relative z-1  w-full">
            <div className="w-full relative z-1 flex     xl:h-[46rem]">
              <div className="relative z-1  text-[#515B28] flex flex-col gap-7 py-12 px-2">
                <strong className="">
                  <h1 className="font-bold text-lg my-2 py-2">
                    Dr. Kendson Davi
                  </h1>
                  <h1 className="text-5xl">Implantes sem</h1>
                  <h1 className="text-5xl">medo, sem dor</h1>
                  <h1 className="text-5xl">e de uma forma</h1>
                  <h1 className="text-5xl">segura</h1>
                </strong>
                <strong className=" font-bold text-lg pt-4 pb-12 	">
                  <h1 className="tracking-widest 	drop-shadow-[0_0px_10px_rgba(255,255,255,0.5)]	">
                    10 anos ajudando a promover
                  </h1>
                  <h1 className="tracking-widest 	drop-shadow-[0_0px_10px_rgba(255,255,255,0.5)]">
                    saúde bucal e recontruir sorrisos.
                  </h1>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-[#D2B57D]">
        <div className="max-w-screen-xl flex flex-col   mx-auto p-4">
          <div className="w-full text-lime-950 -translate-y-14">
            <div className="  flex justify-center ">
              <div className="bg-white p-5 rounded-full ">
                <p className="text-center  text-sm md:text-2xl text-[#515B28] font-extralight tracking-widest">
                  Profissionais com{" "}
                  <span className=" font-extrabold">+ de 10 anos</span> de
                  experiência
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="w-full flex flex-col md:flex-row gap-3 justify-between items-center text-[#515B28] pb-5 ">
            <strong>
              <h1 className="text-4xl md:text-6xl   font-bold">Serviços</h1>
            </strong>
            <strong className="text-justify">
              <h4>Nós acreditamos na qualidade de vida das pessoas.</h4>
              <h4>
                <span className="font-extralight">
                  Por isso, oferecemos atendimentos
                </span>{" "}
                com profissionais
              </h4>
              <h4 className="">
                qualificados <span className="font-extralight">e</span>
                comprometidos copm a sua saúde.
              </h4>
            </strong>
          </div>
        </div>
      </div>
      <div className="w-full text-white ">
        <div className="max-w-screen-xl flex flex-wrap justify-center items-center gap-3 mx-auto p-4">
          <a
            href=""
            className="flex flex-col items-center bg-[#515B28] border border-grenn-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#A3BFA0] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              src={Imagem7}
              alt="as"
              className="m-2 object-cover   w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Odontologia
              </h5>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light   text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
            </div>
          </a>
          <a
            href=""
            className="flex flex-col items-center bg-[#515B28] border border-grenn-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#A3BFA0] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              src={Imagem8}
              alt="as"
              className="m-2 object-cover   w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Nutrição
              </h5>
              <p className="font-light  text-white dark:text-gray-400">
                - Nutricionista esportiva funcional
              </p>
              <p className="font-light text-white dark:text-gray-400">
                - Nutricionista clínica
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                -Especialista em modulação intestinal
              </p>
            </div>
          </a>
          <a
            href=""
            className="flex flex-col items-center bg-[#515B28] border border-grenn-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#A3BFA0] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              src={Imagem9}
              alt="as"
              className="m-2 object-cover   w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Estética facial e corporal
              </h5>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light   text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
            </div>
          </a>
          <a
            href=""
            className="flex flex-col items-center bg-[#515B28] border border-grenn-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#A3BFA0] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              src={Imagem10}
              alt="as"
              className="m-2 object-cover   w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Massoterapia
              </h5>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light   text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
              <p className="font-light  text-white dark:text-gray-400">
                - Reconstrução óssea com enxertos
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full bg-[#515B28]">
        <div className="max-w-screen-xl flex flex-col items-center justify-center gap-3 mx-auto p-4 text-white">
          <h1 className="text-4xl font-bold">Nossa Clínica</h1>
          <div className="border h-40 w-1/2 rounded-2xl flex items-center justify-center">
            <h1 className="text-3xl font-bold m-2">
              Video apresentação espaço
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative ">
        <Image
          className="bg-center object-cover 
          "
          src="https://res.cloudinary.com/dtnww1ler/image/upload/v1717428999/cl%C3%ADnica%20aura/background03.png"
          alt="imagem fundo"
          fill={true}
        />

        <div className=" z-10 relative  max-w-screen-xl flex flex-col items-center justify-center gap-3 mx-auto p-4 text-white">
          <h1 className="text-4xl font-bold">Depoimentos</h1>
          <h1 className="text-4xl font-bold">Instagram</h1>
          <div className="border h-40 w-1/2 rounded-2xl flex items-center justify-center ">
            <h1 className="text-3xl font-bold m-2">Depoimentos do Instagram</h1>
          </div>
          <p className="text-base font-semibold">@clinicaaura.planaltina</p>
        </div>
      </div>
      <div className="w-full bg-[#D2B57D] py-10">
        <div className="max-w-screen-xl flex flex-col items-center justify-center gap-3 mx-auto p-4 text-white">
          <h1 className="text-4xl font-bold">Onde estamos?</h1>
          <p> Aura Odontologia e Saúde Integrada</p>
          <p className="text-justify">
            Quadra 2, Conjunto A, Lote 40, Setor Residencial Leste - Buritís I Q
            1 Cl Conjunto, 1 andar - sala 2 - Planaltina, Brasília - DF,
            73350-201
          </p>

          <div className="w-full  rounded-2xl flex items-center justify-center">
            <iframe
              className="w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d960.6286869764509!2d-47.6482453!3d-15.6175542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a13b03f34e2c5%3A0xabe2497f51a7136a!2sAura%20Odontologia%20e%20Sa%C3%BAde%20Integrada!5e0!3m2!1spt-BR!2sbr!4v1716585190644!5m2!1spt-BR!2sbr"
              width={600}
              height={450}
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
