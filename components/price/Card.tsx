import React from "react";

type CardProps = {
  plan: {
    name: string;
  };
  title: string;
  price: string;
  features: { icon: JSX.Element; text: string }[];
  description: string;
  buttonText: string;
};

// React.FC is a generic type that allows us to define the props that a component receives
const CardPrice: React.FC<CardProps> = ({
  plan,
  title,
  price,
  features,
  description,
  buttonText,
}) => {
  return (
    <div className="bg-[#FCFCFC] rounded-lg overflow-hidden shadow-lg border-2 border-[#F2F2F2] cursor-pointer hover:shadow-xl hover:border-[#C484F1] transition duration-300 border-gradient">
      <div className="px-6 py-4">
        <div className="text-left my-5">
          <span
            className={`${
              plan.name === "Basic"
                ? "text-[#7D7E75] text-sm bg-[#F3E9D2] bg-opacity-50 p-2 rounded-md"
                : "text-[#C484F1] text-sm bg-[#CEA5EA] bg-opacity-50 p-2 rounded-md"
            }`}>
            {plan.name} plan
          </span>
        </div>
        <div className="text-left">
          <span
            className={`${
              title === "Basic"
                ? "text-[#7D7E75] font-bold text-[2rem]"
                : "text-[#C484F1] font-bold text-[2rem]"
            }`}>
            {title}
          </span>
        </div>
        <div className="text-left">
          <span className="text-gray-800 font-bold text-[1.2rem]">{price}</span>
        </div>
        <div className="my-5">
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="mb-3">
                <span className="text-gray-600 text-xs flex items-center gap-2">
                  {feature.icon}
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-[1px] bg-[#E5E5E5]"></div>
        <div className="my-5">
          <p className="text-gray-600 text-xs">{description}</p>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="bg-[#333333] w-full text-center text-sm hover:bg-[#282828] hover:text-[#C484F1] text-white py-3 rounded">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
