import { StyleSheet } from "react-native-unistyles";

const lightTheme = {
  colors: {
    primary: "#ff1ff4",
    primaryForeground: "#ffffff",
    background: "#f4f4f4",
    secondary: "#1ff4ff",
    secondaryForeground: "#000000",
    destructive: "#ff4444",
    destructiveForeground: "#ffffff",
    foreground: "black",
    input: "#e2e2e2",
    ring: "#ff1ff4",
    accent: "#f0f0f0",
    accentForeground: "#000000",
  },
  calc: (v: number) => v * 8,
};

const darkTheme = {
  colors: {
    primary: "#441752",
    primaryForeground: "#ffffff",
    background: "#111",
    secondary: "#EFB6C8",
    secondaryForeground: "#000000",
    destructive: "#ff4444",
    destructiveForeground: "#ffffff",
    foreground: "white",
    input: "#2e2e2e",
    ring: "#aa12ff",
    accent: "#2d2d2d",
    accentForeground: "#ffffff",
  },
  calc: (v: number) => v * 8,
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: appThemes,
});
