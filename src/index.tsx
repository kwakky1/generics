import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Main from "./pages/Main";
import Service from "./pages/Service";
import Location from "./pages/Location";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = createTheme();

theme.typography.h1 = {
  fontSize: "58px",
  fontWeight: "SemiBold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    fontWeight: "SemiBold",
  },
};

theme.typography.h2 = {
  fontSize: "52px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

theme.typography.h3 = {
  fontSize: "46px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
};

theme.typography.h4 = {
  fontSize: "41px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
};

theme.typography.h5 = {
  fontSize: "36px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
};

theme.typography.h6 = {
  fontSize: "32px",
  lineHeight: "150%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    lineHeight: "150%",
  },
};
theme.typography.subtitle1 = {
  fontSize: "29px",
  lineHeight: "150%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
    lineHeight: "150%",
  },
};
theme.typography.subtitle2 = {
  fontSize: "26px",
  lineHeight: "150%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "19px",
    lineHeight: "150%",
  },
};
theme.typography.body1 = {
  fontSize: "23px",
  lineHeight: "150%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "150%",
  },
};
theme.typography.body2 = {
  fontSize: "20px",
  lineHeight: "150%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    lineHeight: "150%",
  },
};
theme.typography.button = {
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
};

theme.typography.caption = {
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
};
theme.typography.overline = {
  fontSize: "14px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "9px",
  },
};

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App>
        <Routes>
          <Route path={"/"} element={<Main />} />
        </Routes>
        <Routes>
          <Route path={"/service"} element={<Service />} />
        </Routes>
        <Routes>
          <Route path={"/location"} element={<Location />} />
        </Routes>
      </App>
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
