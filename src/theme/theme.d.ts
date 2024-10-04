import "@mui/material/styles";
import { CSSObject } from "@emotion/react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleSmall: CSSObject;
    label: CSSObject;
    body3: CSSObject;
  }

  interface TypographyVariantsOptions {
    titleSmall?: CSSObject;
    label?: CSSObject;
    body3?: CSSObject;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleSmall: true;
    label: true;
    body3: true;
  }
}
