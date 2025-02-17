import {
  useScrollTrigger,
  Slide,
  AppBar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import style from './header.module.css';

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}
const drawerWidth = 300;
const navItens = [
  { path: "/", text: "Início", icon: <HomeIcon/> },
  { path: "/servicos", text: "Serviços", icon: <InfoIcon/> },
  { path: "/contatos", text: "Contatos", icon: <ContactsIcon/> },
];

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#000" }}>
        Harmonial Musical Academy
      </Typography>
      <Divider />
      <List>
        {navItens.map((item) => (
          <ListItem key={item.path} disablePadding>
            <NavLink to={item.path} style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemText
                  primary={
                    <h2 className={style.navigation}>
                      {item.icon}
                      {item.text}
                    </h2>
                  }
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll {...props}>
      <AppBar
        sx={{
          background: "#002855",
          color: "#FFD700",
          height: "6rem",
        }}
      >
        <div className={style.container}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <p>Harmonial Musical Academy</p>
        </div>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", sm: "flex" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
}
