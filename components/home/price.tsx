import React from 'react'
import AllCards from '@/components/price/AllCards'

function Price() {
  return (
    <div className="my-20">
          <p className="text-black text-left text-sm mb-5 font-bold">
            Solutions
          </p>
          <p className="text-black text-left text-xl md:text-2xl mb-5 font-bold">
            Plans de tarification
          </p>
          <p className="text-black text-left text-sm mb-10">
            Obtenez une solution de facturation simple et abordable pour votre
            entreprise en fonction de votre besoin
          </p>
          <div className="w-full mx-auto">
            <AllCards />
          </div>
        </div>
  )
}

export default Price