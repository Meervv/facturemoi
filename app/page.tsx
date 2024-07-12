"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, ComponentType } from "react";
import React from "react";
import AvantageAtout from "../components/home/AvantageAtout";
import ImageHead from "../components/home/ImageHead";
import Testimonials from "../components/home/Reviews";
import Price from "../components/home/price";
import Stats from "@/components/home/stats";
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

interface AppProps {
  Component: ComponentType<any>;
  pageProps: {
    session: any;
    pageProps: any;
  };
}

export default function App() {
    const { isLoggedIn, login, logout } = useAuth();

    useEffect(() => {
        // Simuler une connexion pour l'exemple
        const token = localStorage.getItem('token');
        if (token) {
            login(token);
        }
    }, [login]);
    return (
    <div>
      <ImageHead />
        <div className="m-20">
          {/* A enlever après les test */}
            {isLoggedIn ? (
                <div>
                    <h1>Bienvenue, vous êtes connecté !</h1>
                </div>
            ) : (
                <div>
                    <h1>Veuillez vous connecter</h1>
                    <button onClick={() => login('dummy-token')}>Se connecter</button>
                </div>
            )}
            <AvantageAtout />
            <Price />
            <Stats />
            <Testimonials />
        </div>
    </div>
  );
}
