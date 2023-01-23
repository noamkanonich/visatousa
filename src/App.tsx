import { BrowserRouter } from "react-router-dom";
import { NavHeader } from "./components/nav-header/NavHeader";
import Router from "./lib/routes/Router";
import { useEffect, useRef, useState } from "react";
import useTheme from "./theme/useTheme";
import i18n, { initI18n } from "./i18n";
import styled, { ThemeProvider } from "styled-components";

const App = () => {
  const { theme, setDir } = useTheme();
  const initialLanguage = useRef<string | undefined>();
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initI18n({
        language: initialLanguage.current || "he",
      });
      setI18nReady(true);
    };
    init();
  }, []);

  useEffect(() => {
    const onLanguageChanged = () => {
      setDir(i18n.dir());
    };

    i18n.on("languageChanged", onLanguageChanged);
    onLanguageChanged();

    return () => {
      i18n.off("languageChanged", onLanguageChanged);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <BrowserRouter>
          {i18nReady && (
            <>
              <NavHeader />
              <Router />
            </>
          )}
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  flex: 1;
  color: white;
  align-items: center
  font-family: Circular20-Medium, sans-serif;
`;

export default App;
