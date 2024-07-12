"use client"

import React from "react";
import Image from "next/image";

const ImageHead = () => {
  return (
    <div
      style={{ position: "relative", width: "100%" }}
      className="h-[400px] md:h-[600px]">
      <Image
        src="/images/home.jpg"
        alt="hero"
        fill
        priority
        style={{ objectFit:"cover", filter: "brightness(50%)" }} // Appliquer le filtre ici
      />
      <div
        style={{ position: "absolute", color: "white", textAlign: "center" }}
        className="w-6/6 sm:w-3/6 md:w-3/6 px-10 h-full flex flex-col justify-center items-center">
        <div className="mb-5">
          <p className="text-white text-left text-2xl md:text-3xl mb-5 font-bold">
            Simplifiez votre facturation avec notre solution.
          </p>
          <p className="text-white text-left text-sm">
            Nous offrons une plateforme de facturation intuitive et efficace
            pour les entreprises de toutes les tailles. Gagnez du temps et
            optimisez votre gestion financière avec notre solution complète.
          </p>
        </div>
        <div className="flex w-full gap-2">
          <button className="bg-[#0F0F0F] text-center text-white text-sm border-2 border-[#0F0F0F] hover:bg-[transparent] hover:text-[#C484F1] text-white p-3">
            Découvrir
          </button>
          <button className="border-2 border-[#0F0F0F] text-white text-center text-sm hover:bg-[#0F0F0F] hover:text-[#C484F1] text-white p-3">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageHead;
