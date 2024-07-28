import { PaletteColorOptions } from "@mui/material";

// PaletteOptions,Palette を拡張して、カラーキーワードを追加
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    neutral: PaletteColorOptions;
  }
  interface Palette {
    neutral: PaletteColor;
  }
}

// Button の color prop に追加
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}