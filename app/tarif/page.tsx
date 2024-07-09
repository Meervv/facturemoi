"use client"
import React from "react";
import AllCards from "@/components/price/AllCards";
import PsychologyIcon from '@mui/icons-material/Psychology';

const TarifPage = () => {
    return (
        <div>
        <div className="pb-5 md:pb-10">
          <div className="flex justify-center pb-5">
            <PsychologyIcon style={{ width: '50px', height: '50px', fill: '#7D7E75' }} />
          </div>
          <div className="text-center font-bold w-[100%] md:w-[70%] mx-auto pb-5">
            <h1 className="text-[1.7rem] text-[#333333] leading-8">
              La solution complète pour une{" "}
              <span className="text-gradient text-[1.7rem] bg-[#C484F1]">
                gestion de factures sécurisée
              </span>
            </h1>
          </div>
          <div className="text-center font-semibold w-[100%] md:w-[70%] mx-auto">
            <p className="text-sm text-[#ADAF9F]">
              Avec nos abonnements flexibles, profitez d’une solution complète
              pour la création, la gestion et le partage sécurisé de vos factures,
              accessibles à tout moment et partout.
            </p>
          </div>
        </div>
      <AllCards />
    </div>
    )
}

export default TarifPage;