import "@mui/material/styles";
import { CSSObject } from "@emotion/react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleSmall: CSSObject;
    titleLarge: CSSObject;
    label: CSSObject;
    body3: CSSObject;
  }

  interface TypographyVariantsOptions {
    titleSmall?: CSSObject;
    titleLarge?: CSSObject;
    label?: CSSObject;
    body3?: CSSObject;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleSmall: true;
    titleLarge: true;
    label: true;
    body3: true;
  }
}
