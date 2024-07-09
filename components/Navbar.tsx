"use client"

import React, { useState } from "react";

import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography, Tooltip, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Link from "next/link";

import { useRouter } from 'next/navigation';

const pages = [
    { label: "Accueil", href: "/" },
    { label: "Tarif", href: "/tarif" },
    { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
    { label: "Profil", href: "/profil" }
]

const Navbar: React.FC = () => {

    //router de next/navigation
    const router = useRouter();

    //permet de savoir si le menu est ouvert
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null); 

    //permet de fermer le menu
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

     //permet de savoir si l'utilisateur est connecté
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    //permet de savoir si l'utilisateur est connecté
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    //fonction qui permet d'ouvrir le menu
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    //fonctions qui permet de fermer le menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    //permet de déconnecter l'utilisateur
    const handleLogout = () => {
        document.cookie = 'token=; Max-Age=0; path=/;'; // Supprime le cookie
        setIsLoggedIn(false); // Met à jour l'état de connexion après la déconnexion
        router.push('/connexion'); // Redirige vers la page de connexion
    };

    // Menu de l'utilisateur
    const settings = ["Profile", "Account", "Dashboard", "Logout"];
    
    return (
        <AppBar
      position="static"
      style={{ backgroundColor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              LOGO
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={page.href}
                      style={{ color: "inherit", textDecoration: "none" }}>
                      {page.label}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}>
                <Link
                  href={page.href}
                  style={{ color: "inherit", textDecoration: "none" }}>
                  {page.label}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', gap: '10px'}}>
            <Button 
              sx={{
                  fontSize: "0.8rem",
                  backgroundColor: "#7D7E75",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#6c6d63", // Couleur de fond au survol
                    color: "white", // Couleur du texte au survol
                  },
                }}
                href="/contact">
                Contactez-nous
              </Button>
            {isLoggedIn ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ p: 0, backgroundColor: "#7D7E75", color: "white" }}
                    alt=""
                    src=""
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Button
                  sx={{
                    fontSize: "0.8rem",
                  backgroundColor: "#7D7E75",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#6c6d63", // Couleur de fond au survol
                    color: "white", // Couleur du texte au survol
                  },
                }}
                href="/connexion">
                Connexion
              </Button>
              // <Button color="inherit" onClick={() => setIsLoggedIn(true)}>Login</Button>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={
                    setting === "Logout" ? handleLogout : handleCloseUserMenu
                  }>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Navbar;