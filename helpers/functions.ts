import { setThemeColor } from "state/reducer/common";
import { DEFAULT_PRIMARY_COLOR } from "./core-constants";
export const changeThemeSettingsDashboard = (
  tradeGreen: string,
  tradeRed: string,
  setThemeColor: any,
  ThemeColor: any,
  chooseColor: number
) => {
  const checkRedGreen = localStorage.getItem("chart-up-down");
  if (checkRedGreen === "1") {
    document.documentElement.style.setProperty("--trade-green", tradeGreen);
    document.documentElement.style.setProperty("--trade-red", tradeRed);
  } else {
    document.documentElement.style.setProperty("--trade-green", tradeRed);
    document.documentElement.style.setProperty("--trade-red", tradeGreen);
  }
  localStorage.setItem("tradeGreen", tradeGreen);
  localStorage.setItem("tradeRed", tradeRed);
  localStorage.setItem("chooseColor", chooseColor.toString());
  setThemeColor((prevThemeColor: any) => ({
    ...prevThemeColor,
    green: tradeGreen,
    red: tradeRed,
    chooseColor: chooseColor,
  }));
};

export const changeLayout = (layoutNumber: number, setLayout: any) => {
  localStorage.setItem("layout-trade", layoutNumber.toString());
  setLayout(layoutNumber);
};
export const swapGreenToRedAndRedToGeen = (
  setThemeColor: any,
  ThemeColor: any,
  redGreenUpDown: number
) => {
  const tradeGreen = localStorage.getItem("tradeGreen");
  const tradeRed = localStorage.getItem("tradeRed");
  if (redGreenUpDown === 2) {
    localStorage.setItem("chart-up-down", "2");
    setThemeColor((prevThemeColor: any) => ({
      ...prevThemeColor,
      green: tradeRed ? tradeRed : "#d63031",
      red: tradeGreen ? tradeGreen : "#32d777",
      redGreenUpDown: redGreenUpDown,
    }));
    document.documentElement.style.setProperty(
      "--trade-green",
      tradeRed ? tradeRed : "#d63031"
    );
    document.documentElement.style.setProperty(
      "--trade-red",
      tradeGreen ? tradeGreen : "#32d777"
    );
  } else {
    localStorage.setItem("chart-up-down", "1");
    setThemeColor((prevThemeColor: any) => ({
      ...prevThemeColor,
      green: tradeGreen ? tradeGreen : "#32d777",
      red: tradeRed ? tradeRed : "#d63031",
      redGreenUpDown: redGreenUpDown,
    }));
    document.documentElement.style.setProperty(
      "--trade-green",
      tradeGreen ? tradeGreen : "#32d777"
    );
    document.documentElement.style.setProperty(
      "--trade-red",
      tradeRed ? tradeRed : "#d63031"
    );
  }
};
export const checkDashboardThemeSettings = (
  setThemeColor: any,
  ThemeColor: any,
  setLayout: any
) => {
  const tradeGreen = localStorage.getItem("tradeGreen");
  const tradeRed = localStorage.getItem("tradeRed");
  const layoutTrade = localStorage.getItem("layout-trade");
  const getColorNumber = localStorage.getItem("chooseColor");

  const checkRedGreen = localStorage.getItem("chart-up-down");
  setLayout(layoutTrade ? Number(layoutTrade) : 1);
  if (checkRedGreen === null) {
    localStorage.setItem("chart-up-down", "1");
  }

  if (Number(checkRedGreen) === 2) {
    document.documentElement.style.setProperty(
      "--trade-green",
      tradeRed ? tradeRed : "#d63031"
    );
    document.documentElement.style.setProperty(
      "--trade-red",
      tradeGreen ? tradeGreen : "#32d777"
    );

    setThemeColor({
      redGreenUpDown: checkRedGreen ? Number(checkRedGreen) : 2,
      red: tradeGreen ? tradeGreen : "#32d777",
      green: tradeRed ? tradeRed : "#d63031",
      chooseColor: getColorNumber ? Number(getColorNumber) : 1,
    });
  } else {
    document.documentElement.style.setProperty(
      "--trade-green",
      tradeGreen ? tradeGreen : "#32d777"
    );
    document.documentElement.style.setProperty(
      "--trade-red",
      tradeRed ? tradeRed : "#d63031"
    );

    setThemeColor({
      redGreenUpDown: checkRedGreen ? Number(checkRedGreen) : 1,
      green: tradeGreen ? tradeGreen : "#32d777",
      red: tradeRed ? tradeRed : "#d63031",
      chooseColor: getColorNumber ? Number(getColorNumber) : 1,
    });
  }
};

function hexToRgb(hex: any) {
  if (!hex) return "";
  // Remove the hash sign if it's included
  hex = hex.replace(/^#/, "");

  // Parse the hex value into individual color components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}

export const setLightTheme = (settings: any, dispatch: any) => {
  // Set theme to light mode without checking localStorage
  localStorage.setItem("theme", "light");
  dispatch(setThemeColor("light"));
  document.documentElement.setAttribute("data-theme", "light");

  // Apply light theme colors
  settings.theme_color.map((themeColors: any) => {
    if (themeColors.name === "--primary-color") {
      document.documentElement.style.setProperty(
        themeColors.name,
        themeColors.value
          ? hexToRgb(themeColors.value)
          : hexToRgb(DEFAULT_PRIMARY_COLOR[settings.default_theme_color])
      );
    } else if (themeColors.value) {
      document.documentElement.style.setProperty(
        themeColors.name,
        themeColors.value
      );
    }
  });
};

// Replace other functions with direct calls to setLightTheme
export const checkDarkMode = setLightTheme;
export const darkModeToggle = (settings: any, setTheme: any, dispatch: any) => {
  setLightTheme(settings, dispatch);
};
export const darkModeToggleDashboard = (dispatch: any,) => {
  setLightTheme({}, dispatch);
};
export const checkThemeState = (setTheme: any, dispatch: any) => {
  setTheme(1); // 1 for light mode
  dispatch(setThemeColor("light"));
};
export const rootThemeCheck = (default_theme_mode: string) => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

export function isApiLocalhost(): boolean {
  const api_url = process.env.NEXT_PUBLIC_BASE_URL || "";
  if (!api_url) {
    throw new Error(`env NEXT_PUBLIC_BASE_URL value not found`);
  }
  if (api_url.includes("localhost") || api_url.includes("127.0.0.1")) {
    return true;
  } else return false;
}
