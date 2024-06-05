"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const Navbarr = () => {
  // Estado para controlar se o menu principal está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar a visibilidade do menu principal
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect para adicionar e limpar o event listener para redimensionamento da janela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="w-full bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo e título - Início */}
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://res.cloudinary.com/dtnww1ler/image/upload/v1717428034/cl%C3%ADnica%20aura/logoAura.svg"
            className="w-20 h-20"
            alt="Logo Aura"
            width={80} // Ajuste o width para corresponder ao tamanho real
            height={80} // Ajuste o height para corresponder ao tamanho real
          />
          <span className="self-center text-sm font-extralight whitespace-nowrap ">
            ODONTOLOGIA E SAÚDE INTEGRADA
          </span>
        </span>
        {/* Logo e título - Fim */}
        
        {/* Botão para abrir/fechar o menu em dispositivos móveis - Início */}
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 5.636L12 12l6.364 6.364-1.414 1.414L12 13.414l-6.364 6.364-1.414-1.414L10.586 12 4.222 5.636l1.414-1.414L12 10.586l6.364-6.364 1.414 1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            )}
          </svg>
        </button>
        {/* Botão para abrir/fechar o menu em dispositivos móveis - Fim */}
        
        {/* Links do menu principal - Início */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } flex-col w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-light text-base flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5561982624920%26text%3DOl%25C3%25A1%252C%2Bvim%2Bdo%2BInstagram%252C%2Bgostaria%2Bde%2Bagendar%2Buma%2Bconsulta&e=AT07qGMBJPNArdlTLx0VKlmycofpaNO1eGQPc920CwfMp7y8by2ycoD01gAz3WPhQFuCIAAube1T7DT8yaJYdox_xkrZnRbPH75yj6YN2lwAvwn9"
                className="inline-flex w-full text-center justify-center text-white bg-[#515B28] hover:bg-[#D2B57D] focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                AGENDAR MINHA CONSULTA
              </a>
            </li>
          </ul>
        </div>
        {/* Links do menu principal - Fim */}
      </div>
    </nav>
  );
};
