/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import {fonts} from '../lib/fonts'

export const theme = extendTheme({
  fonts: {
    heading: fonts.montserrat.style.fontFamily,
    body: fonts.robotoLight.style.fontFamily,
  },
});