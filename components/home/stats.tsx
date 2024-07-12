import React from "react";
import { BarChart } from "@mui/x-charts";

function Stats() {
    const seriesA = {
        data: [2, 3, 2, 3],
        label: 'Client A',
      };
      const seriesB = {
        data: [1, 1, 1, 2],
        label: 'Client B',
      };
      const seriesC = {
        data: [1, 2, 1, 1],
        label: 'Client C',
      };
      const dataset = [
        { month: 'Jan', seoul: 1000 },
        { month: 'Feb', seoul: 2000 },
        { month: 'Mar', seoul: 3000 },
        { month: 'Apr', seoul: 2000 },
        { month: 'May', seoul: 1000 },
        { month: 'Jun', seoul: 8000 },
        { month: 'Jul', seoul: 4500 },
        { month: 'Aug', seoul: 6000 },
        { month: 'Sep', seoul: 7500 },
      ];
      
      const chartSetting = {
        width: 500,
        height: 400,
      };
    
      const valueFormatter = (value: number | null) => `${value}mm`;
    
  return (
    <div className="my-20">
      <div>
        <p className="text-black text-left text-sm mb-5 font-bold">
          Statistique
        </p>
        <p className="text-black text-left text-xl md:text-2xl mb-5 font-bold">
          Statistique de lentreprise
        </p>
        <p className="text-black text-left text-sm mb-10">
          Accédez à un tableau de bord intuitif et interactif pour visualiser
          les performances de votre entreprise en temps réel. Générer des
          rapports détaillés et des statistiques personnalisées sur les
          factures, les revenus et bien plus encore. Notre outil vous permet de
          suivre facilement les tendances clés et de prendre des décisions
          éclairées pour optimiser votre gestion financière.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: "band", dataKey: "month" }]}
          xAxis={[
            {
              id: "values",
              label: "Chiffre d'affaire en €",
              tickInterval: [
                1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
              ],
            },
          ]}
          series={[
            {
              dataKey: "seoul",
              label: "Mois d'activité",
              valueFormatter,
              color: "#7D7E75",
            },
          ]}
          layout="horizontal"
          {...chartSetting}
        />
        <BarChart
          width={500}
          height={400}
          series={[
            { ...seriesA, stack: "total" },
            { ...seriesB, stack: "total" },
            { ...seriesC, stack: "total" },
          ]}
          xAxis={[
            {
              id: "months",
              data: ["Jan", "Feb", "Mar", "Apr"],
              scaleType: "band",
              label: "Mois d'activité", // Titre de l'axe x
            },
          ]}
          yAxis={[
            {
              id: "values",
              label: "Nombre de facture", // Titre de l'axe y
              tickInterval: [0, 1, 2, 3, 4, 5, 6], // Valeurs de l'axe y par incréments de 2
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Stats;
