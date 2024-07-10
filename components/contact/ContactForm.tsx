"use client"

import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
  Grid
} from '@mui/material';

import { useForm } from 'react-hook-form';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from 'next/navigation';

export type FormData = {
  email: string;
  message: string;
};

const defaultTheme = createTheme();

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const router = useRouter();

  async function onSubmit(data: FormData) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // Assurez-vous que la réponse est en JSON et que le statut est OK
      if (!response.ok) {
        const errorResult = await response.text(); // Utilisez text() pour lire la réponse brute
        throw new Error(`Network response was not ok: ${errorResult}`);
      }
  
      const result = await response.json();
      console.log('Email sent successfully:', result);

      router.push('/')
      reset()
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EmailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Nous contacter
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse mail"
                  {...register("email")}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="message"
                  label="Ecrire le message..."
                  {...register("message")}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Envoyer
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactForm;
