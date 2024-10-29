import "@mui/material/styles";
import { CSSObject } from "@emotion/react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleSmall: CSSObject;
    titleLarge: CSSObject;
    label: CSSObject;
    body3: CSSObject;
    editorH1: CSSObject;
    editorH2: CSSObject;
    planTitle: CSSObject;
    editorText: CSSObject;
  }

  interface TypographyVariantsOptions {
    titleSmall?: CSSObject;
    titleLarge?: CSSObject;
    label?: CSSObject;
    body3?: CSSObject;
    editorH1: CSSObject;
    editorH2: CSSObject;
    planTitle?: CSSObject;
    editorText?: CSSObject;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleSmall: true;
    titleLarge: true;
    label: true;
    body3: true;
    editorH1: true;
    editorH2: true;
    planTitle: true;
    editorText: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    background: Palette["background"] & {
      primary: string;
    };
  }

  interface PaletteOptions {
    background?: Partial<Palette["background"]>;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    primary: string;
  }
}
