"use client";

import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';

const testimonials = [
  {
    name: "Jean Dupont",
    title: "PDG de Dupont SA",
    feedback: "Excellente plateforme, elle m'a permis de générer des factures très facilement.",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    name: "Marie Durand",
    title: "Freelance",
    feedback: "L'outil de personnalisation des factures est incroyable. Je recommande vivement !",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    name: "Pierre Martin",
    title: "Comptable",
    feedback: "La fonctionnalité de partage de fichier a simplifié mon travail avec mes clients.",
    avatar: "/path/to/avatar3.jpg",
  },
  {
    name: "Claire Bernard",
    title: "Entrepreneuse",
    feedback: "L'application est très intuitive et facilite énormément la gestion des factures.",
    avatar: "/path/to/avatar4.jpg",
  },
  {
    name: "Michel Lefevre",
    title: "Directeur financier",
    feedback: "Je gagne un temps précieux grâce à cet outil. Très satisfait !",
    avatar: "/path/to/avatar5.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleTestimonials = () => {
    const cardsToShow = windowWidth < 768 ? 1 : 3;
    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsToShow);
    if (visibleTestimonials.length < cardsToShow) {
      return visibleTestimonials.concat(testimonials.slice(0, cardsToShow - visibleTestimonials.length));
    }
    return visibleTestimonials;
  };

  return (
    <div className="w-full my-20">
          <p className="text-black text-left text-xl md:text-2xl mb-5 font-bold">
            Témoignages clients
          </p>
          <p className="text-black text-left text-sm mb-10">
            Découvrez ce que nos clients satisfait disent de nous !
          </p>
      <div className="relative max-w-5xl px-4 flex items-center">
        <IconButton
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handlePrevClick}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <div className="flex justify-center space-x-4 w-[90%] mx-auto">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col items-center text-center hover:cursor-pointer"
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.avatar}
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        <IconButton
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handleNextClick}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Testimonials;