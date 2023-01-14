import React, { useEffect, useState, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  useEffect(() => {
    const fetchGetUserLogged = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
      setLoading(false);
    };
    fetchGetUserLogged();
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
    setInitializing(false);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return (
      <div className="app-container" data-theme={theme}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="20"
        />
      </div>
    );
  }

  if (loading) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="app-container">
        <header>
          <h1>Catatan Pribadi</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }
  return (
    <ThemeProvider value={themeContextValue}>
      <LocaleProvider value={localeContextValue}>
        <div className="app-container">
          {loading ? (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
            />
          ) : (
            <div>
              <header>
                <h1>{locale === "id" ? "Catatan Pribadi" : "Personal Note"}</h1>

                <Navigation logout={onLogout} name={authedUser.name} />
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/add" element={<AddPage />} />
                  <Route path="/notes/:id" element={<DetailPage />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </main>
            </div>
          )}
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
