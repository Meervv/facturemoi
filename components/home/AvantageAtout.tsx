"use client"

import React from 'react'
import RequestPageIcon from '@mui/icons-material/RequestPage';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import HistoryIcon from '@mui/icons-material/History';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const AvantageAtout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-10">
        <div>
          <p className="text-black text-left text-xl md:text-2xl mb-5 font-bold">
            Découvrez nos fonctionnalités pour faciliter votre facturation
          </p>
          <p className="text-black text-left text-sm mb-5">
            Notre plateforme de facturation offre une solution simple et
            efficace pour gérer vos factures. Avec des fonctionnalités
            intuitives et une interface conviviale, vous pouvez créer, envoyer
            et suivre vos factures en quelques clics.
          </p>
          <div className="flex w-full gap-2 mb-5">
            <button className="bg-[#0F0F0F] text-center text-white text-sm border-2 border-[#0F0F0F] hover:bg-transparent hover:text-[#C484F1] p-3">
              Découvrir
            </button>
            <button className="text-black text-center text-sm border-2 border-[transparent] hover:border-[#0F0F0F] hover:text-[#C484F1] p-3">
              En savoir plus
            </button>
          </div>
        </div>

        <div className="flex justify-evenly flex-col gap-3 md:gap-0">
          <div>
            <RequestPageIcon className="text-[#C484F1] mb-2" />
            <p className="text-black text-left text-lg md:text-xl mb-2 font-bold">
              Gestion complète de vos factures
            </p>
            <p className="text-black text-left text-sm">
              Créez et personnalisez des factures professionnelles en quelques
              minutes.
            </p>
          </div>
          <div>
            <SupervisedUserCircleIcon className="text-[#C484F1] mb-2" />
            <p className="text-black text-left text-lg md:text-xl mb-2 font-bold">
              Gestion des clients et des produits
            </p>
            <p className="text-black text-left text-sm">
              Gardez une trace de vos clients et de vos produits pour une
              facturation simplifiée.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly flex-col gap-3 md:gap-0">
        <div>
            <HistoryIcon className="text-[#C484F1] mb-2" />
            <p className="text-black text-left text-lg md:text-xl mb-2 font-bold">
              Suivi des paiements en temps réel
            </p>
            <p className="text-black text-left text-sm">
              Recevez des notifications instantanées lorsque votre facture est prête.
            </p>
          </div>
          <div>
            <AutoFixHighIcon className="text-[#C484F1] mb-2" />
            <p className="text-black text-left text-lg md:text-xl mb-2 font-bold">
              Factures personnalisables
            </p>
            <p className="text-black text-left text-sm">
              Utilisez des modèles personnalisables pour une touche professionnelle.
            </p>
          </div>
        </div>
      </div>
  )
}

export default AvantageAtout