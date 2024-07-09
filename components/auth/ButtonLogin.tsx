"use client"

import { Button } from "@mui/material";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ButtonLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (res.ok) {
          router.push('/');
        } else {
          const data = await res.json();
          alert(data.message);
        }
    };

   return (
        <Button 
            type="submit"
            fullWidth variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Connexion
        </Button>
   )
}
