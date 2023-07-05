import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useLocalStorage } from "@mantine/hooks";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import Login from "./routes/Login";
import Home from "./routes/Home";
import Protected from "./layouts/Protected";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = () => setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <Router>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route
              path="/home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </Router>
  );
}

export default App;
