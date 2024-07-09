"use client"; // Assurez-vous que ce commentaire est au début du fichier

import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

const Home = () => {
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
            {isLoggedIn ? (
                <div>
                    <h1>Bienvenue, vous êtes connecté !</h1>
                    <button onClick={logout}>Se déconnecter</button>
                </div>
            ) : (
                <div>
                    <h1>Veuillez vous connecter</h1>
                    <button onClick={() => login('dummy-token')}>Se connecter</button>
                </div>
            )}
        </div>
    );
};

export default Home;
