import React from "react";
import CardPrice from "./Card";
import SecurityIcon from '@mui/icons-material/Security';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreateIcon from '@mui/icons-material/Create';
import ShareIcon from '@mui/icons-material/Share';


const AllCards = () => {
  // Définition des données pour les cartes
  const cards = [
    {
      plan: {
        name: "Basic",
      },
      title: "Basic",
      price: "4.99€/mois",
      features: [
        { icon: <ArchitectureIcon className="w-5" />, text: "Génération de facture illimité" },
        { icon: <ShareIcon className="w-5" />, text: "Partage de fichier / dossier" },
        { icon: <SecurityIcon className="w-5" />, text: "Stockage sécurisé des fichiers 5GO" },
        { icon: <BarChartIcon className="w-5" />, text: "Statistique en temps réel" },
        { icon: <CreateIcon className="w-5" />, text: "Personnalisation de la facture" },
      ],
      description: "Idéal pour les petites entreprises",
      buttonText: "Souscrire à l'offre Basic",
    },
    {
      plan: {
        name: "Premium",
      },
      title: "Premium",
      price: "12.99€/mois",
      features: [
        { icon: <ArchitectureIcon className="w-5" />, text: "Génération de facture illimité" },
        { icon: <ShareIcon className="w-5" />, text: "Partage de fichier / dossier" },
        { icon: <SecurityIcon className="w-5" />, text: "Stockage sécurisé des fichiers illimité" },
        { icon: <BarChartIcon className="w-5" />, text: "Statistique en temps réel" },
        { icon: <CreateIcon className="w-5" />, text: "Personnalisation de la facture" },
      ],
      description: "Vous n'arriverez plus à vous en passer",
      buttonText: "Souscrire à l'offre Premium",
    },
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-5/6 xl:w-4/6  mx-auto">
        {cards.map((card, index) => (
          <CardPrice key={index} {...card} />
        ))}
      </div>
  );
};

export default AllCards;
