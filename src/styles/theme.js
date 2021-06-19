import React, { useContext } from "react";
import PropTypes from "prop-types";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  ThemeProvider as StyledThemeProvider,
  ThemeContext,
} from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider as MuiStylesProvider,
} from "@material-ui/core/styles";

import { useFontObserver } from "../lib/helpers";

const breakpointValues = {
  xs: 0,
  sm: 320,
  md: 640,
  lg: 1280,
  xl: 1920,
  xxl: 2500,
};

const theme = {
  colors: {
    primary: "#67A4C7",
    secondary: "#f28518",
    background: "#FFF",
    text: "#001226",
    textLight: "#66717d",
    surface: "#f7f7f7",
    surfaceDark: "#262626",
    textSurfaceDark: "#FFF",
    textSurfaceDisabled: "#d8d8d8",
    surfaceInputBackgroundDisabled: "#ececec",
    surfaceSecondary: "#fafafb",
    textSurfaceSecondary: "#343434",
    textSecondary: "#FFF",
    separatorSurfaceSecondary: "#ececec",
    link: "#0366db",
    linkDark: "#334151",
    linkDarkSurface: "#66717d",
    placeholder: "#b2b2b2",
    separator: "#ccd0d4",
    darkGrey: "#68808C",
    instrumentacion: "#F28518",
    pirometria: "#f21818",
    datos: "#bfa03b",
    comando: "#1c43ad",
    potencia: "#6fc8c9",
    bombas: "#ba7975",
    soldadura: "#81a367",
    flexible: "#c0509c",
    catodica: "#83096f",
    feedbackNegativo: "#C60024",
    feedbackPositivo: "#34BE34",
  },
  fonts: {
    primary: {
      regular: "'Montserrat', sans-serif",
    },
    secondary: {},
  },
  navHeight: "100px",
};

const muiTheme = createMuiTheme({
  shadows: ["none"],
  typography: {
    fontFamily: theme.fonts.primary.regular,
    fontSize: 12,
    htmlFontSize: 16,
  },
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.secondary,
    },
  },
  breakpoints: { values: breakpointValues },
});

theme.mui = muiTheme;

/**
 *  ThemeProvider
 */

export const ThemeProvider = ({ children }) => {
  const { fontsLoaded } = useFontObserver();
  const transparent = "transparent";
  const actualTheme = fontsLoaded
    ? theme
    : {
        colors: {
          ...theme.colors,
          text: transparent,
          textLight: transparent,
          link: transparent,
          linkDark: transparent,
        },
        ...theme,
      };

  return (
    <MuiStylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={actualTheme}>
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </MuiStylesProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  children: null,
};

/**
 * Hooks
 */

export const useTheme = () => useContext(ThemeContext);

export default theme;
