import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  { label: "제네릭스", url: "/", icon: <CodeIcon /> },
  /*{ label: "서비스 소개", url: "/service", icon: <WysiwygIcon /> },
  { label: "문의하기", url: "/location", icon: <LocationOnIcon /> },*/
];

function Navigation() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLocation = (url: string) => {
    navigate(url);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => handleLocation("/")}
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="logo"
              style={{
                marginRight: 1,
                width: 200,
                display: matches ? "flex" : "none",
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 0.3, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <Box sx={{ width: 250 }}>
                <List>
                  {pages.map((page) => {
                    const { label, url, icon } = page;
                    return (
                      <ListItem
                        key={label}
                        onClick={() => handleLocation(url)}
                        disablePadding
                      >
                        <ListItemButton>
                          <ListItemIcon>{icon}</ListItemIcon>
                          <ListItemText primary={label} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => handleLocation("/")}
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="logo"
              style={{
                marginRight: 1,
                width: 200,
                display: matches ? "none" : "flex",
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => {
              const { label, url } = page;
              return (
                <Button
                  key={label}
                  onClick={() => handleLocation(url)}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "black",
                    display: "block",
                    fontSize: 18,
                    textDecoration:
                      location.pathname === url ? "underline" : "",
                    textUnderlineOffset: location.pathname === url ? "4px" : "",
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
