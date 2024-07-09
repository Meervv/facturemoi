"use client"

import React, { useState } from "react";

import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Link from "next/link";

import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";

const pages = [
    { label: "Accueil", href: "/" },
    { label: "Tarif", href: "/tarif" },
    { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
    { label: "Profil", href: "/profil" }
]

const Navbar: React.FC = () => {

  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
  };

  const handleLogout = () => {
      logout(); // Appel à la fonction logout depuis le contexte
      router.push('/connexion'); // Redirige vers la page de connexion après la déconnexion
  };

  const settings = ["Profile", "Account", "Dashboard", "Logout"];
    
  return (
    <AppBar position="static" style={{ backgroundColor: "white", color: "black" }}>
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
                onClick={handleLogout}>
                Déconnexion
              </Button>
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
  );
};

export default Navbar;